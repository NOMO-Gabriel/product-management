'use client';

import MyNav from "@/app/components/shared/navbar/MyNav";
import Link from "next/link";
import { Route, routes } from "../routes/routes";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "@fortawesome/react-fontawesome";

const Navbar: React.FC = () => {
    const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);

    const toggleDropDown = (name: string) => {
        setDropDownOpen(dropDownOpen === name ? null : name);
    };

    const renderDropdown = (route: Route) => (
        <ul className="ml-4">
            {route.children?.map((child) => (
                <li key={child.path || child.name} className="relative">
                    <Link href={child.path || '#'}>
                        <h3 className="text-lg italic font-semibold">{child.name}</h3>
                    </Link>
                    {child.children && renderDropdown(child)}
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <MyNav />
            <nav className="h-20 p-6 flex justify-between items-center border-b border-gray-200 bg-gray-100">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            className="h-16 transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </Link>
                </div>
                <nav className="flex flex-grow">
                    <ul className="flex space-x-10 items-center">
                        {Object.keys(routes).map((key) => {
                            const route = routes[key as keyof typeof routes];
                            return (
                                route.children ? (
                                    <li key={route.name} className="relative">
                                        <button
                                            onClick={() => toggleDropDown(route.name)}
                                            className="flex items-center space-x-2 text-lg font-semibold hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                                        >
                                            <h3>{route.name}</h3>
                                            <span>
                                                {dropDownOpen === route.name ? (
                                                    <FaChevronUp />
                                                ) : (
                                                    <FaChevronDown />
                                                )}
                                            </span>
                                        </button>
                                        {dropDownOpen === route.name && renderDropdown(route)}
                                    </li>
                                ) : (
                                    <li key={route.path || route.name}>
                                        <Link href={route.path || '#'} className="text-lg italic font-semibold hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                                            <h3>{route.name}</h3>
                                        </Link>
                                    </li>
                                )
                            );
                        })}
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <Link href="/login">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Login
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Register
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
