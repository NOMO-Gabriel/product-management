'use client'
import React from 'react';

export default function Page() {
    return (
        <div className="grid place-items-center bg-gray-50 p-4 space-y-2">
        <div className="text-center ">
        <h1 className="text-4xl font-semibold italic text-gray-800">View our products</h1>
    </div>
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Card */}
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Product" />
    <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
    <p className="text-gray-600 mt-2">A brief description of the product goes here. It should be enticing and informative.</p>
    <div className="mt-4 flex items-center justify-between">
    <span className="text-lg font-italic text-gray-900">99.99 FrCFA</span>
    <button
    className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">View more
    </button>
    <button
    className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">Buy
    Now
    </button>
    </div>
    </div>
    </div>
    {/* Add more product cards as needed */}
    </div>
    </div>
);
}
