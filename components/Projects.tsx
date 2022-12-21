import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen flex flex-col relative overflow-y-scroll text-left md:flex-row max-w-full
		justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-4xl text-center">
        Projects / Studies
      </h3>
      <motion.div
        className="absolute top-[200px] w-5/6
        grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        px-4 gap-5 snap-center"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
      >
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
            key={project}
            className="p-4 first-letter:relative group
						flex flex-col items-center justify-center overflow-y-scroll
            bg-[#292929]/40 rounded-lg z-20 hover:opacity-100 cursor-pointer"
          >
            <SocialIcon
              url="https://jessywlee.medium.com/"
              target="_blank"
              fgColor="gray"
              bgColor="transparent"
            />
            <div>
              <h4 className="text-center text-3xl font-semibold">
                Case Study: blah blah
              </h4>
              <p className="text-center md:text-left mt-2 text-ellipsis">
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
      </motion.div>

      <div className="absolute w-full top-[30%] bg-[#e05abd]/10 h-[400px] -skew-y-12"></div>
    </div>
  );
}
