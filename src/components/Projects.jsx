import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import Carousel from "./Carousel";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <a id="Projects">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="my-20 text-center text-4xl font-bold"
        >
          Projects
        </motion.h1>
      </a>

      <motion.h6
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -75 }}
        transition={{ duration: 0.2, delay: 1 }}
        className="font-semibold text-center -translate-y-16 text-purple-900"
      >
        (Click on image to view Project)
      </motion.h6>

      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.link} target="_blank">
                <img
                  src={project.image}
                  width={300}
                  height={300}
                  alt={project.title}
                  className="mb-6 rounded-xl filter blur-sm cursor-pointer hover:blur-none transition-all duration-300 hover:scale-125"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full max-w-xl lg:w-3/4 border-b border-gray-900"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-900 font-bold"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="font-semibold text-center text-2xl mt-12 "
      >
        Few of My Graphic Works
      </motion.h1>
      <Carousel />
    </div>
  );
}

export default Projects;
