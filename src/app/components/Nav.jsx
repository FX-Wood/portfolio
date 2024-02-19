"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nav as BootNav } from 'react-bootstrap';

const Nav = () => {
    const pathname = usePathname()
    const baseClass = "nav-button btn btn-outline-*"
    return (
            <BootNav as="nav" className="justify-content-center" >
                <BootNav.Item className={`${pathname === '/' ? baseClass + ' active' : baseClass }`}>
                    <Link href="/">Projects</Link>
                </BootNav.Item>
                <BootNav.Item className={`${pathname === '/contact' ? baseClass + ' active' : baseClass }`}>
                    <Link href="/contact">Contact</Link>
                </BootNav.Item>
            </BootNav>
    )
}

export default Nav
