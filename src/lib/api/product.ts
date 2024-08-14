// src/lib/api/products.ts
import { PRODUCTS_URL, LATEST_PRODUCTS_URL } from './urls';

export const getProducts = async () => {
    const response = await fetch(PRODUCTS_URL,{next:{revalidate:0}});
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    console.log(response);
    return response.json();
};

export const getProduct = async (id: string) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
};

export const getLatestProducts = async () => {
    const response = await fetch(LATEST_PRODUCTS_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch latest products');
    }
    return response.json();
};

export const createProduct = async (productData: any) => {
    const response = await fetch(PRODUCTS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to create product');
    }
    return response.json();
};

export const editProduct = async (id: string, productData: any) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to edit product');
    }
    return response.json();
};

export const deleteProduct = async (id: string) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete product');
    }
    return response.json();
};

export const updateProduct = async (id: string, productData: any) => {
    const response = await fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error('Failed to update product');
    }
    return response.json();
};
