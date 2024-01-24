import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Project } from "../typings";
import ShinyCircle from "./ShinyCircle";
import { mouseMoveEffect } from "../utils/Util";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  useEffect(() => {
    const background = document.querySelector('.project-container') as HTMLElement
     mouseMoveEffect(background)
  },[])
  return (
    <div
      className="h-screen flex flex-col relative overflow-y-scroll text-left md:flex-row max-w-full
			justify-evenly mx-auto items-center z-0 project-container"
    >
      <ShinyCircle />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl sm:text-4xl text-center">
        Projects / Studies
      </h3>
      <motion.div
        className="absolute top-[25%] sm:top-[20%] max-w-7xl
        grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        px-4 gap-5 snap-center pb-[100px] sm:pb-3"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
              key={project.id}
              className="p-4 first-letter:relative group
							flex flex-col bg-[#292929]/40 
							rounded-lg z-20 hover:opacity-100 cursor-pointer
							border border-[#e05abd]/20 "
            >
              <div className="flex justify-end w-full">
                <SocialIcon
                  url={
                    project.linkToBuild1
                      ? project.linkToBuild1
                      : project.linkToBuild2
                  }
                  target="_blank"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </div>

              <div>
                <h4 className="text-center text-2xl font-semibold max-h-[280px] max-w-[360px] overflow-hidden overflow-ellipsis">
                  {project.title}
                </h4>
                <p className="text-center md:text-left mt-3">
                  {project.summary}
                </p>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
