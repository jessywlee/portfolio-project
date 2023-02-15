import React from "react";
import { motion } from "framer-motion";
import Contribution from "./Contribution";

export default function Contributions() {
  const oneYear = Array.from(Array(365).keys());

  return (
    <div
      className="h-screen flex flex-col relative overflow-y-scroll text-left md:flex-row max-w-full
			justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl sm:text-4xl text-center">
        Contributions
      </h3>
      <motion.div
        className="absolute top-[25%] sm:top-[20%] max-h-[13%] left-[25%]
        snap-center contribution-container flex flex-wrap flex-col text-center"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {oneYear.map((day) => (
          <Contribution key={day} />
        ))}
      </motion.div>
    </div>
  );
}
