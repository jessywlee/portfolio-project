import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen flex flex-col relative overflow-y-scroll text-left md:flex-row max-w-full
			justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-4xl text-center">
        Projects / Studies
      </h3>
      <motion.div
        className="absolute top-[180px] w-5/6
        grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        px-4 gap-5 snap-center"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}>
        {projects
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
              key={project.id}
              className="p-4 first-letter:relative group
							flex flex-col overflow-y-scroll bg-[#292929]/40 
							rounded-lg z-20 hover:opacity-100 cursor-pointer">
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
                <h4 className="text-center text-2xl font-semibold">
                  {project.title}
                </h4>
                <p className="text-center md:text-left mt-3 text-ellipsis">
                  {project.summary}
                </p>
              </div>
            </motion.div>
          ))}
      </motion.div>

      <div className="absolute w-full top-[30%] bg-[#e05abd]/10 h-[400px] -skew-y-12"></div>
    </div>
  );
}
