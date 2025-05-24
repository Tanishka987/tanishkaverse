'use client'
import React,{ useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/footer';
import "../about/about.css"
import emailjs from "@emailjs/browser";
export default function Page(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ejt7jg9", 
        "template_q3i0lib", 
        form.current,
        "AkJicW0u0bW4Dqg08" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again.");
          console.error(error.text);
        }
      );
  };

   return <>
   <Navbar/>
   <div className="main">
        <div className="maincontainer">
          <div className="content">
            <div className="about">contact.</div>
            <div className="subheading">
            Get in touch with me via social media<br/>
            or send me an email.
            </div>
            <div className="allsocial">
                <div className="social">
                    <img className="social-img" src="https://th.bing.com/th/id/OIP.ze6jLJcWGhUaMX5jw61hjAHaHw?rs=1&pid=ImgDetMain"/>
                    <div className="twitter">Twitter</div>                    
                </div>
                <div className="social">
                    <img className="social-img" src="https://toppng.com/uploads/preview/facebook-logo-in-circle-without-background-11549845823jxxwaj1f82.png"/>
                    <div className="facebook">Facebook</div>                    
                </div>
                <div className="social">
                    <img className="social-img" src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-z5dvl47c.png"/>
                    <div className="linkedin">Linkedin</div>                    
                </div>
                <div className="social">
                    <img className="social-img" src="https://www.newlifepismo.com/wp-content/uploads/2018/12/instagram-icon-pink.png"/>
                    <div className="instagram">Instagram</div>                    
                </div>
            </div>
          </div>
          <img className="mainImg" src="/croppedpic.png" />
        </div>
    </div>
    <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Send me an email</h2>
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Email</button>
    </form>    
   <Footer/>
   </>
}