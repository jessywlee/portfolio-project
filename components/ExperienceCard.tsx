import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import experience from "../public/experience.png";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center 
			space-y-7 flex-shrink-0 w-[500px] h-[600px] snap-center
			bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
			duration-200 overflow-scroll">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        <Image
          className="w-32 h-32 rounded-full object-cover object-center"
          src={experience}
          alt="company logo"
        />
      </motion.div>

      <div className="px-0 md:px-10 text-left">
        <h4 className="text-4xl font-light">Frontend Engineer</h4>
        <p className="font-bold text-2xl mt-1">SeaVantage</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <Image
            src="https://img.icons8.com/color/512/javascript.png"
            width="30"
            height="30"
            alt="javascript"
            className="rounded-full"
          />
          <Image
            src="https://img.icons8.com/color/512/javascript.png"
            width="30"
            height="30"
            alt="javascript"
            className="rounded-full"
          />
          <Image
            src="https://img.icons8.com/color/512/javascript.png"
            width="30"
            height="30"
            alt="javascript"
            className="rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">work start ... end</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary pointssummary points</li>
          <li>summary pointssummary points</li>
          <li>summary pointssummary points</li>
          <li>summary pointssummary points</li>
          <li>summary pointssummary points</li>
        </ul>
      </div>
    </article>
  );
}
