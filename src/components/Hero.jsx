import React from 'react'
import ProfilePic from "../assets/Rahul.jpg"
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration:0.5, delay},
  }
});


function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2'>
        <div className='flex flex-col item-center lg:items-start'>
          <motion.h1 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Rahul Raj</motion.h1>

          <motion.h2
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className='pb-16 text-6xl font-bold tracking-tight lg:mt-16 lg:text-6xl'>I am </motion.h2>

          <motion.span 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl font-semibold tracking-tight text-transparent'>
              <Typewriter
                options={{
                  strings: ["a Web Developer", "a Programmer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </motion.span>
        </div>

      </div>
      <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
          <motion.img 
          initial={{x:100, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{duration: 0.5}}
          src={ProfilePic} alt="Rahul Raj" height="500px" width="500px" className='rounded-3xl shadow-2xl shadow-gray-700' />
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Hero
