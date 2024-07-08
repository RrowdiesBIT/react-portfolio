import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {AiOutlineUser, AiOutlineFundProjectionScreen,AiOutlineAudit} from "react-icons/ai"
import { GrTechnology } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
function Navbar() {
  useEffect(() => {
    
    const smoothScrollToSection = (e) => {
      e.preventDefault(); 
      const targetId = e.currentTarget.getAttribute('href').substring(1); // Get target ID without #
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners on component mount
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScrollToSection);
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScrollToSection);
      });
    };
  }, []); 

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='font-bold text-6xl hover:text-purple-700 transition-all duration-200'
          >
            Rr
          </motion.h1>
        </a>
      </div>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='flex gap-10 text-2xl'
      >
        <a href="#Tech"><GrTechnology size={30} className='translate-x-4'/><h3 className='font-bold cursor-pointer hover:scale-125 hover:text-purple-700 transition-all duration-200'>Tech</h3></a>

        <a href="#About"><AiOutlineUser size={30} className="translate-x-5" /><h3 className='font-bold cursor-pointer hover:scale-125 hover:text-purple-700 transition-all duration-200'>About</h3></a>

        <a href="#Projects"><AiOutlineFundProjectionScreen size={30} className="translate-x-7" /><h3 className='font-bold cursor-pointer hover:scale-125 hover:text-purple-700 transition-all duration-200'>Projects</h3></a>

        <a href="#Contact"><TiContacts size={30} className="translate-x-8" /><h3 className='font-bold cursor-pointer hover:scale-125 hover:text-purple-700 transition-all duration-200'>Contact</h3></a>

        <a href="https://drive.google.com/file/d/1Ew8JJu0PD9xUHilUzYvPtvKXmDJrJLud/view?usp=drive_link" target='_blank'><AiOutlineAudit size={30} className="translate-x-8" /><h3 className='font-bold cursor-pointer hover:scale-125 hover:text-purple-700 transition-all duration-200'>Resume</h3></a>
      </motion.div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='m-8 flex items-center justify-center gap-4 text-2xl '
      >
        <div className='flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200'>
          <a href="https://www.linkedin.com/in/rahulrajbit" target='_blank'>
            <FaLinkedin size={25}/>
          </a>
        </div>
        <div className='flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200'>
          <a href="https://www.github.com/RrowdiesBIT" target='_blank'>
            <FaGithub size={25}/>
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
