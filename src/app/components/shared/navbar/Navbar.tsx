'use client'
import React from 'react';
import Link from 'next/link';
import {routes} from "@/app/components/shared/routes/routes";
import MyNav from "@/app/components/shared/navbar/MyNav";
const Navbar = () => {
    return (

        <div>
            < MyNav />
            <nav>
                <ul>
                    {routes.map((route) => (
                        <li key={route.path}>
                            <Link href={route.path}>{route.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;