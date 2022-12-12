import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group flex relative">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src="https://img.icons8.com/color/512/typescript.png"
        className="rounded-full w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale
				transition duration-200 ease-in-out"
      />
    </div>
  );
}
