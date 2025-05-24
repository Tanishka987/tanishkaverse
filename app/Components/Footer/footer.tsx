import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import './footer.css'

function Footer(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        setVisible(window.pageYOffset > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>  
            
            <div className='footer'>
                <div className='copyright'>© 2025  Tanishka Petwal</div>
                <div className='linkbar'>
                        <Link href="/about" className="nav-link1">about me</Link>
                        <Link href="/projects" className="nav-link1">projects</Link>
                        <Link href="/contact" className="nav-link1">contact me</Link>
                        <Link href="/blog" className="nav-link1">blog</Link>
                </div>
            </div>
            {visible && (
                <button className="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑
                </button>
                )}
        </>
    );
};
export default Footer;