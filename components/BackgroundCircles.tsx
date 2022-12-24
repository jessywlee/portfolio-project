import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.2, 0.3, 0.8, 0.5, 1],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
        <div className="absolute border border-[#e384ca] rounded-full h-[360px] w-[360px] sm:h-[650px] sm:w-[650px] mt-52 animate-pulse" />
        <div />
      </motion.div>
    </>
  );
}
