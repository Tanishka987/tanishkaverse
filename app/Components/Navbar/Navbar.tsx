import Link from 'next/link';
import React from 'react';
import './Navbar.css'; // Ensure the CSS file is correctly imported
// import logo from "../assets/primelogo.jpg"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
        <img src='/favicon.ico' alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/about" className="nav-link">about me</Link>
        <Link href="/projects" className="nav-link">projects</Link>
        <Link href="/contact" className="nav-link">contact me</Link>
        <Link href="/blog" className="nav-link">blog</Link>
      </div>
      <div className='nav-links'>
      <Link href="https://twitter.com"><img src='/favicon.ico' alt="Logo" className="social-image" /></Link>
      <Link href="https://twitter.com"><img src='/favicon.ico' alt="Logo" className="social-image" /></Link>
      <Link href="https://twitter.com"><img src='/favicon.ico' alt="Logo" className="social-image" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
