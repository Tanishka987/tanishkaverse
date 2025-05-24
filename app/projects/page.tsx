'use client'
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";
import "../about/about.css"
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Page() {
  const data = [
    { id: 1, img: '/primeticket.png', title: 'Prime Ticket', description: 'React, php, CSS, SQL',link:'https://primeticket.co' },
    { id: 2, img: '/primemedia.png', title: 'Prime Media agency', description: 'Hostinger, Wordpress',link:'https://primemediaagency.com.au' },
    { id: 3, img: '/primeability.png', title: 'NDIS website', description: 'HTML, CSS, Javascript',link:'https://primeability.com.au' },
    { id:4, img: '/persistventures.png', title:'Persist ventures ', description:'3d animated website', link:''},
    { id:5, img: '/atom.png', title:'Atom ', description:'Atomic structure of elements', link:''},
    { id:6, img: '/chat-app.png', title:'Kuku Chat App', description:'Live chat app for messaging', link:''}
  ];

  const Card = ({ img, title, description, link }) => {
    return (
     <Link className="card" href ={link}>
         <div >
        <img src={img} alt={title} className="card-img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <FaAngleRight/>
      </div>
     </Link>
    );
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="maincontainer">
          <div className="content">
            <div className="about">projects</div>
            <div className="subheading">
              Checkout my latest projects and source codes{" "}
            </div>
            <div className="topic">
            I’ve built projects for hackathons, university, startups, 
            and while doing internships.
            </div>
          </div>
          <img className="mainImg" src="/project.png" />
        </div>
        <div className="line" />
        <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
      </div>
      <Footer />
    </>
  );
}
