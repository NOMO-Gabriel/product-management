'use client';

import React, { useEffect, useState } from 'react';
import { Product } from "../../types/types";
import Link from "next/link";
import { getProducts } from "@/lib/api/product";
import { useRouter } from "next/navigation";


// Component to display a product card
const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="transition-colors duration-300 cursor-pointer hover:scale-105">
            <Link href={`/shop/products/${product.id}`}>
                <div className="border-2 border-gray-300 w-full sm:w-80 mt-8 h-80">
                    <div className="h-1/2 border-1 border-gray-300">
                        <img
                            className="w-full h-full object-cover"
                            src={product.mainImage.url}
                            alt={`Product ${product.id}`}
                        />
                    </div>
                    <div className="border-2 h-1/4">
                        <div className="flex space-x-12 justify-center text-lg font-semibold p-6">
                            <h3 className="text-lg font-semibold text-black hover:text-orange-500 duration-200">
                                {product.name}
                            </h3>
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-4  items-center border-gray-500 h-1/4 p-4 space-y-2">
                        <span className="text-blue-950 space-x-2 -ml-2 hover:text-orange-500 duration-200">
                            {product.price}
                            <span className="text-black font-semibold italic text-sm">FCFA</span>
                        </span>
                        <Link href={`/shop/products/${product.id}`}>
                            <button className="bg-black text-white rounded hover:bg-blue-600 text-lg p-2 mb-4">
                                More
                            </button>
                        </Link>
                        <div>
                            <button className="bg-black text-white rounded hover:bg-blue-600 text-lg p-2 mb-4">
                                Add To Cart
                            </button>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

// Main page component to display products with pagination
export default function Page() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(9);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            setError(null);
            const productList = await getProducts();
            setProducts(productList);
        } catch (error) {
            setError('Failed to load products');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center mt-8 h-screen space-x-4">
                <p className="text-blue-700 text-4xl italic">Loading</p>
                <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-black animate-spin border-2 border-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-black animate-spin border-2 border-blue-500"></div>
                    <div className="w-8 h-8 rounded-full bg-black animate-spin border-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen p-4 bg-red-50 border border-red-300 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-600">Error</h2>
                <p className="text-xl text-red-500 mt-2">{error}</p>
                <button
                    onClick={() => {
                        window.location.reload();
                    }}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        );
    }

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="bg-gray-50 p-4">
            <div className="text-center mb-4">
                <h1 className="text-4xl font-semibold italic text-gray-800 mt-8">View our products</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-20 mb-20">
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-black text-white rounded p-2 hover:bg-blue-600"
                >
                    Previous
                </button>
                <span className="text-lg">{currentPage} / {totalPages}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-black text-white rounded p-2 hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
