import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col rounded-lg items-center 
			space-y-7 flex-shrink-0 w-[340px] h-[500px] sm:w-[420px] sm:h-[600px] desktop:w-[480px] desktop:h-[640px] snap-center
			bg-[#2d2c2c] p-6 pt-10 scrollbar-thin overflow-x-hidden
			scrollbar-track-gray-400/20 scrollbar-thumb-[#e05abd]/40 mt-7 sm:mt-0">
      <div className="px-0 md:px-10 text-left">
        <h4 className="text-xl mt-1">
          {experience.jobTitle} @{" "}
          <a
            href={experience.companyUrl}
            target="_blank"
            className="font-light underline"
            rel="noreferrer">
            {experience.company}
          </a>
        </h4>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          {experience.technologies.map((tech) => (
            <Image
              src={urlFor(tech.skillImage).url()}
              width={30}
              height={30}
              alt={tech.title}
              key={tech._id}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-sm sm:text-base">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
