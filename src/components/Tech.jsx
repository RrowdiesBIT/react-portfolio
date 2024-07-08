import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { RiTailwindCssLine } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { DiJava } from 'react-icons/di'
import {SiCplusplus} from "react-icons/si"
import { SiC } from 'react-icons/si'
import {motion } from 'framer-motion'


const iconVariants = (duration) => ({
  initial: {y:-15},
  animate: {
    y: [30,-25],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
});

function Tech() {
  return (
    <div className='border-b border-neutral-800 pb-24 pt-20'>
    <a id='Tech'>
    <motion.h1 
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration: 0.5,delay:0.5}}
    className='my-20 text-center  font-bold text-4xl'>Tech Stack</motion.h1>
    </a>
    <motion.div
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration: 0.5,delay:1}}
    className='flex flex-wrap items-center justify-center gap-4 '>
      <motion.div 
       variants={iconVariants(2.5)}
       animate="animate"
       initial="initial"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400'/>
      </motion.div>

      <motion.div 
       variants={iconVariants(2.8)}
       animate="animate"
       initial="initial"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiMongodb className='text-7xl text-green-500'/>
      </motion.div>
      <motion.div 
       variants={iconVariants(3)}
       animate="animate"
       initial="initial"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaNodeJs className='text-7xl text-green-400'/>
      </motion.div>
      <motion.div 
       variants={iconVariants(3.2)}
       animate="animate"
       initial="initial"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiExpress className='text-7xl text-yellow-400'/>
      </motion.div>
      <motion.div
       variants={iconVariants(3.4)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <RiTailwindCssLine className='text-7xl text-cyan-400'/>
      </motion.div>
      <motion.div
       variants={iconVariants(3.6)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaHtml5 className='text-7xl text-orange-400'/>
      </motion.div>
      <motion.div
       variants={iconVariants(3.8)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <FaGithub className='text-7xl text-white'/>
      </motion.div>
      <motion.div
       variants={iconVariants(4)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiJavascript className='text-7xl text-blue-400'/>
      </motion.div>
      
    </motion.div>

    <motion.h1 
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration: 0.5,delay:0.7}}
    className='my-20 text-center text-4xl font-bold'>Languages</motion.h1>

    <motion.div 
       initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration: 0.5,delay:1.2}}
    className='flex flex-wrap items-center justify-center gap-4 '>
      <motion.div 
       variants={iconVariants(2.5)}
       animate="animate"
       initial="initial"
      className='rounded-2xl border-4 border-neutral-800 p-4'>
      <SiCplusplus className='text-7xl text-blue-500' />
      </motion.div>
      <motion.div
       variants={iconVariants(3.5)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <DiJava className='text-7xl text-orange-500'/>
      </motion.div>

      <motion.div
       variants={iconVariants(4)}
       animate="animate"
       initial="initial"
       className='rounded-2xl border-4 border-neutral-800 p-4'>
        <SiC className='text-7xl text-blue-500'/>
      </motion.div>
     
      
    </motion.div>
      
    </div>
  )
}

export default Tech
