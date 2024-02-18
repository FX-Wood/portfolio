"use client"
import React from 'react';
import Nav from './Nav'
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="md" className="nav-bar navbar-dark">
            <Navbar.Brand href="/">
                <img 
                    src="/icon/brand.svg"
                    alt="the letters F and X in a bold serif font"
                    className="nav-brand-img"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav />
            </Navbar.Collapse> 
        </Navbar>
    )
}

export default NavBar
