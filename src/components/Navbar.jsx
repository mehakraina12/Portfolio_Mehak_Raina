import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State for active link

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value based on when you want the navbar to become fixed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle link click and set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={`transition-all duration-300 fixed top-0 left-0 w-full border-b border-neutral-900 bg-black pb-4 lg:mb-0 flex items-center justify-between py-6 z-50 ${isFixed ? 'fixed-nav' : ''}`}>
      <div className="flex flex-shrink-0 items-center ml-8">
    <a href="/" className="text-3xl font-bold text-white ml-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
      Mehak Raina
    </a>
  </div>
      <div className="m-5 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="#home" 
          className={`relative group mr-5 ${activeLink === 'home' ? 'text-yellow-500' : 'text-white'}`} 
          onClick={() => handleLinkClick('home')}
        >
          Home
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'home' ? 'scale-x-100' : ''}`}></span>
        </a>
        <a 
          href="#about" 
          className={`relative group mr-5 ${activeLink === 'about' ? 'text-yellow-500' : 'text-white'}`} 
          onClick={() => handleLinkClick('about')}
        >
          About
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'about' ? 'scale-x-100' : ''}`}></span>
        </a>
        <a 
          href="#projects" 
          className={`relative group mr-5 ${activeLink === 'projects' ? 'text-yellow-500' : 'text-white'}`} 
          onClick={() => handleLinkClick('projects')}
        >
          Projects
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'projects' ? 'scale-x-100' : ''}`}></span>
        </a>
        <a 
          href="#contact" 
          className={`relative group mr-5 ${activeLink === 'contact' ? 'text-yellow-500' : 'text-white'}`} 
          onClick={() => handleLinkClick('contact')}
        >
          Contact
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'contact' ? 'scale-x-100' : ''}`}></span>
        </a>
        <a 
          href="https://drive.google.com/file/d/1_TuZfEAU5L2umKbJVudR_5W71qiF1zke/view?usp=sharing" 
          className={`relative group mr-20 ${activeLink === 'resume' ? 'text-yellow-500' : 'text-white'}`} 
          onClick={() => handleLinkClick('resume')}
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
          <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'resume' ? 'scale-x-100' : ''}`}></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
