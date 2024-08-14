// src/types/type.ts
export type Image = {
    id: number;
    url: string;
    description: string;
};

export type Category = {
    id: number;
    name: string;
    description: string;
};

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    createdAt: string;
    category: Category;
    images: Image[];
    mainImage: Image;
};

export type ApiResponse<T> = {
    data: T;
    message?: string;
    error?: string;
};
