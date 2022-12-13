import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExprience({}: Props) {
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
      <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-400 text-3xl md:text-4xl">
        Experience
      </h3>
      <div className="mt-[150px] w-full flex overflow-x-scroll space-x-5 p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
