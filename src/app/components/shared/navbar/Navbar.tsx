'use client'
import React from 'react';
import Link from 'next/link';
import {routes} from "@/app/components/shared/routes/routes";
const Navbar = () => {
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        nav {
          background: #333;
          color: #fff;
          padding: 1rem;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline;
          margin-right: 1rem;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
        </nav>
    )
}
export default Navbar;