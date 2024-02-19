"use client"
import React from 'react';
import Container from 'react-bootstrap/Container';
import SocialMediaLinks from '../components/SocialMediaLinks';

export default function ContactPage() { 
    return (
        <main className="contact-main">
                <Container>
                    <p>check out my <a href="/">projects</a></p>
                    <p>send me an <a href="mailto:fxwood.work@gmail.com" target='_blank'>email</a></p>
                    <p>or connect with me on <a href="https://linkedin.com/in/fx-wood">linkedin!</a></p>
                    <SocialMediaLinks/>
                </Container>
        </main>
    )
}

