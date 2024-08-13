'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

type Props = {};

export default function Page({}: Props) {

    const currentPath = usePathname();

    return (
        <div>
            <h1>Template</h1>
            <p>path of page : {currentPath}</p>
        </div>
    );
}
