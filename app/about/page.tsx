'use client'
import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import "./about.css"
export default function Page(){
    return(
        <>
        <Navbar/>
    <div className="main">
    <div className='maincontainer'>
        <div className='content'>
            <div className='about'>about.</div>
            <div className='subheading'>I'm a software engineer based in India. </div>
            <div className='topic'>I love bringing ideas to life through clean, intuitive, and meaningful digital experiences. 
                Whether it’s designing user-friendly websites or building smart tech solutions, my goal is to create work that connects, helps, and inspires.</div>
        </div>
        <img className="mainImg"src="/croppedpic.png"/>   
    </div>
    <div className='line' />
     <div className='gallery'>
     <img className='photo' src="/favicon.ico"/>  
     <img className='photo' src="/images/react.jpeg"/>  
     <img className='photo' src="/images/laravel.png"/>   
     <img className='photo' src="/images/SEO.png"/> 
     <img className='photo' src="/images/tailwind.png"/> 
     <img className='photo' src="/images/node.png"/>  
     <img className='photo' src="/images/wordpress.png"/>  
     <img className='photo' src="/croppedpic.png"/>   
     <img className='photo' src="/croppedpic.png"/> 
     <img className='photo' src="/croppedpic.png"/> 
    </div>   
    </div>
    <Footer/>
    </>
    );
    
};