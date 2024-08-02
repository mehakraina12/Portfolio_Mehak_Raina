import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) setIsMenuOpen(false); 
  };

  return (
    <nav className={`transition-all duration-300 fixed top-0 left-0 w-full border-b border-neutral-900 bg-black pb-4 lg:mb-0 flex flex-col lg:flex-row items-center justify-between py-6 z-50 ${isFixed ? 'fixed-nav' : ''}`}>
      <div className="flex flex-shrink-0 items-center justify-center lg:justify-start w-full lg:w-auto px-8 lg:px-16">
        <a href="/" className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Mehak Raina
        </a>
      </div>
      <div className="lg:hidden flex items-center absolute top-6 right-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-0 right-0 w-full bg-black text-white p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white text-2xl mb-4 self-end"
            >
              ✕
            </button>
            <a 
              href="#home" 
              className={`relative group my-2 ${activeLink === 'home' ? 'text-yellow-500' : 'text-white'}`} 
              onClick={() => handleLinkClick('home')}
            >
              Home
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'home' ? 'scale-x-100' : ''}`}></span>
            </a>
            <a 
              href="#about" 
              className={`relative group my-2 ${activeLink === 'about' ? 'text-yellow-500' : 'text-white'}`} 
              onClick={() => handleLinkClick('about')}
            >
              About
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'about' ? 'scale-x-100' : ''}`}></span>
            </a>
            <a 
              href="#projects" 
              className={`relative group my-2 ${activeLink === 'projects' ? 'text-yellow-500' : 'text-white'}`} 
              onClick={() => handleLinkClick('projects')}
            >
              Projects
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'projects' ? 'scale-x-100' : ''}`}></span>
            </a>
            <a 
              href="#contact" 
              className={`relative group my-2 ${activeLink === 'contact' ? 'text-yellow-500' : 'text-white'}`} 
              onClick={() => handleLinkClick('contact')}
            >
              Contact
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'contact' ? 'scale-x-100' : ''}`}></span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1h14KCtJg9oI84n1Rn3ysJ8blQd_ek4lS/view?usp=sharing" 
              className={`relative group my-2 ${activeLink === 'resume' ? 'text-yellow-500' : 'text-white'}`} 
              onClick={() => handleLinkClick('resume')}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
              <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === 'resume' ? 'scale-x-100' : ''}`}></span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`hidden lg:flex lg:items-center lg:justify-center gap-4 text-2xl`}>
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
          href="https://drive.google.com/file/d/1h14KCtJg9oI84n1Rn3ysJ8blQd_ek4lS/view?usp=sharing" 
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
