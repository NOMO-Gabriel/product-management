'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Menu from "@/app/components/administration/Menu";

type Props = {};

export default function Page({}: Props) {

    const currentPath = usePathname();

    return (
        <div>
            <Menu/>
            <h1>Welcome</h1>
            <p>path of page : {currentPath}</p>
        </div>
    );
}
