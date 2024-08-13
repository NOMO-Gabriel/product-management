// src/app/components/shared/navbar/Navbar.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Route, routes } from "@/app/components/shared/routes/routes";

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setDropdownOpen(dropdownOpen === name ? null : name);
    };

    const renderDropdown = (route: Route) => (
        <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md">
            {route.children?.map((child) => (
                <li key={child.path || child.name} className="relative">
                    <Link href={child.path || '#'} className="block px-4 py-2 hover:bg-gray-700">
                        {child.name}
                    </Link>
                    {child.children && renderDropdown(child)}
                </li>
            ))}
        </ul>
    );

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <div className="flex items-center space-x-4">
                <Link href={routes.home.path || '/'} className="flex-shrink-0">
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                </Link>
            </div>
            <ul className="flex space-x-4">
                {Object.keys(routes).map((key) => {
                    const route = routes[key as keyof typeof routes];
                    return (
                        route.children ? (
                            <li key={route.name} className="relative">
                                <button
                                    onClick={() => toggleDropdown(route.name)}
                                    className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                                >
                                    {route.name}
                                </button>
                                {dropdownOpen === route.name && renderDropdown(route)}
                            </li>
                        ) : (
                            <li key={route.path || route.name}>
                                <Link
                                    href={route.path || '#'}
                                    className="px-4 py-2 text-white hover:bg-gray-700 rounded-md"
                                >
                                    {route.name}
                                </Link>
                            </li>
                        )
                    );
                })}
            </ul>
            <div className="flex items-center space-x-4">
                <Link href={routes.cart.path || '/'} className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md">
                    Cart
                </Link>
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown('account')}
                        className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md"
                    >
                        Account
                    </button>
                    {dropdownOpen === 'account' && (
                        <ul className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md">
                            {routes.account.children?.map((item) => (
                                <li key={item.path || item.name}>
                                    <Link href={item.path || '#'} className="block px-4 py-2 hover:bg-gray-700">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
