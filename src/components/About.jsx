import React from "react";
import gif from "../assets/UI Developer.gif"
import { motion } from "framer-motion";
import HighlightText from "./HighlightText";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <a id="About">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:-100}}
           transition={{delay:0.5, duration:1}}
      className="my-20 text-center text-4xl font-bold">
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      </a>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="flex items-center justify-center">
            <img className="rounded-2xl object-fill shadow-2xl shadow-purple-900"  src= {gif} alt="about" />
          </motion.div>
          </div>
          <motion.div
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:100}}
           transition={{delay:0.5}}
           className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2  p-6 font-sans translate-y-36 text-2xl font-semibold">
              "Hello! I'm currently pursuing <HighlightText text={"B.Tech"} /> CSE at <HighlightText text={"Birla Institute of Technology, Mesra,"} />  where my passion lies in <HighlightText text={"web development"} /> and exploring new concepts in this dynamic field. Currently i'm learning <HighlightText text={"MERN"} /> stack and aspire to be a <HighlightText text={"Full Stack Developer"} />. I'm dedicated to mastering both front-end and back-end technologies, eager to create engaging web experiences and contribute to innovative solutions. Welcome to my portfolio, where I showcase my journey and projects in web development!"
              
              </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
