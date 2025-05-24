'use client';
import React, { useEffect, useRef } from 'react';
import './dashboard.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
function Dashboard() {
  const containerRef = useRef(null);
  const afterImageRef = useRef(null);
  const handleRef = useRef(null);
  const beforeLabelRef = useRef(null);
  const afterLabelRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const afterImage = afterImageRef.current;
    const handle = handleRef.current;
    const beforeLabel = beforeLabelRef.current;
    const afterLabel = afterLabelRef.current;
    const beforeImage = document.querySelector('.image-before');

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const width = rect.width;

      const clampedX = Math.max(0, Math.min(offsetX, width));
      
      const percentage = clampedX / width;
      
      const animationOffsetBefore = -20 * percentage; 
      const animationOffsetAfter = 20 * (1 - percentage); 
      
      handle.style.left = `${clampedX}px`;

      
      afterImage.style.clip = `rect(0, ${clampedX}px, ${rect.height}px, 0)`;
      
      
      beforeImage.style.transform = `translateX(${animationOffsetBefore}px)`;
      afterImage.style.transform = `translateX(${animationOffsetAfter}px)`;
      
      
      beforeLabel.style.opacity = 1 - percentage;
      afterLabel.style.opacity = percentage;
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      <Link href='/about'>
      <div className="dashboard">
        <div className="image-label before-label" ref={beforeLabelRef}><p>developer</p>
          <FaArrowCircleLeft/></div>
        <div className="slider-container">
          <div className="slider" ref={containerRef}>
            <img src="/pic.png" alt="Before Image" className="image-before"/>
            <img src='/pic-art.png' alt="After Image" className="image-after" ref={afterImageRef}/>
            <div className="slider-handle" ref={handleRef}></div>
          </div>
        </div>
       <div className="image-label after-label" ref={afterLabelRef}>
          <p>
          {'<'}coder{'>'}
          </p>
          <FaArrowCircleRight/>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Dashboard