import React from 'react';
import './work.css'; // regular CSS file
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

function Work() {
  const data = [
    { id: 1, img: '/primeticket.png', title: 'Prime Ticket', description: 'React, php, CSS, SQL',link:'https://primeticket.co' },
    { id: 2, img: '/primemedia.png', title: 'Prime Media agency', description: 'Hostinger, Wordpress',link:'https://primemediaagency.com.au' },
    { id: 3, img: '/primeability.png', title: 'NDIS website', description: 'HTML, CSS, Javascript',link:'https://primeability.com.au' },
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
    <div className='container'>
      <div className="heading">SOME OF MY LATEST WORK</div>
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
  );
}

export default Work;
