'use client';
import React from 'react';
import './globals.css';
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from './Components/Dashboard/dashboard';
import Work from "./Components/work/work";
import Footer from "./Components/Footer/footer";

function Example() {
  return (
    <>
      <Navbar />
      <Dashboard/>
      <Work/>
      <Footer/>
    </>
  );
}

export default Example