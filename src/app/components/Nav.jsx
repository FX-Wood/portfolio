"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nav as BootNav } from 'react-bootstrap';

const Nav = () => {
    const pathname = usePathname()
    const baseClass = "nav-button btn btn-outline-*"
    return (
        <BootNav as="nav" >
            <BootNav.Item className={`${pathname === '/' ? baseClass + ' active' : baseClass }`}>
                <Link href="/">Home</Link>
            </BootNav.Item>
            <BootNav.Item className={`${pathname === '/contact' ? baseClass + ' active' : baseClass }`}>
                <Link href="/contact">Contact</Link>
            </BootNav.Item>
        </BootNav>
    )
}

export default Nav
