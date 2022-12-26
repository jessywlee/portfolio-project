import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

export default function WorkExprience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative 
			text-center md:text-left md:flex-row max-w-7xl 
			px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute uppercase z-30 top-24 tracking-[20px] -mr-[20px] text-gray-400 text-3xl md:text-4xl bg-[rgb(36,36,36)]">
        Experience
      </h3>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="mt-[100px] sm:mt-[140px] max-w-[420px] flex flex-col sm:flex-row sm:overflow-x-scroll 
        sm:space-x-5 p-10 pb-[100px] sm:pb-0 sm:snap-x snap-mandatory scrollbar-thin
        scrollbar-track-gray-400/20 scrollbar-thumb-[#e05abd]/40">
        {experiences
          .sort((a, b) => a.order - b.order)
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </motion.div>
    </motion.div>
  );
}
