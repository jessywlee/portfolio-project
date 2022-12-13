import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full
		justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-4xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden 
			snap-x snap-mandatory z-20 scrollbar-thin
			scrollbar-track-gray-400/20 scrollbar-thumb-[#e05abd]/40">
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            key={project}
            className="w-screen h-screen snap-center flex-shrink-0 flex flex-col space-y-5 
						items-center justify-center p-20 md:p-44">
            <Image
              src="https://img.icons8.com/external-flat-satawat-anukul/512/external-designthinking-design-thinking-flat-flat-satawat-anukul-35.png"
              alt="project"
              width="240"
              height="240"
            />
            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="text-center text-3xl font-semibold">
                Case Study: blah blah
              </h4>
              <p className="text-center md:text-left">
                There was something in the tree. It was difficult to tell from
                the ground, but Rachael could see movement. She squinted her
                eyes and peered in the direction of the movement, trying to
                decipher exactly what she had spied. The more she peered,
                however, the more she thought it might be a figment of her
                imagination.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute w-full top-[30%] bg-[#e05abd]/10 h-[400px] -skew-y-12"></div>
    </div>
  );
}
