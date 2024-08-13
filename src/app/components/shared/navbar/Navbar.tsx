'use client';

import MyNav from "@/app/components/shared/navbar/MyNav";
import Link from "next/link";
import { Route, routes } from "../routes/routes";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    const [dropDownOpen, setDropDownOpen] = useState<string | null>(null);

    const toggleDropDown = (name: string) => {
        setDropDownOpen(dropDownOpen === name ? null : name);
    };

    const renderDropdown = (route: Route) => (
        <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48">
            {route.children?.map((child) => (
                <li key={child.path || child.name} className="relative">
                    <Link href={child.path || '#'}>
                        <h3 className="text-lg italic font-semibold text-gray-800 hover:text-blue-500">{child.name}</h3>
                    </Link>
                    {child.children && renderDropdown(child)}
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <MyNav />
            <nav className="h-20 p-6 flex justify-between items-center border-b border-gray-200">
                <div className="flex items-center">
                    <Link href="/" className={"rounded mr-50 flex space-x-1 transition-colors duration-300 cursor-pointer hover:scale-105" }>
                        <img
                            src="/assets/images/logo.png"
                            alt="Logo"
                            className="h-12  mb-2 "
                        />
                        <h1 className={"mt-3 text-lg font-semibold  "}>MyShop</h1>
                    </Link>
                </div>
                <nav className="flex flex-grow ml-60">
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
                                            <FontAwesomeIcon icon={dropDownOpen === route.name ? faChevronUp : faChevronDown} />
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
                        <button className="px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Login
                        </button>
                    </Link>
                    <Link href="/register">

                        <button className="px-4 py-2 bg-gray-950 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                            Register
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
