import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      className="flex flex-col justify-center items-center relative text-center md:text-left xl:flex-row 
		max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-4xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
