import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import experience from "../public/experience.png";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  useEffect(() => {
    console.log(experience);
  }, []);
  return (
    <article
      className="flex flex-col rounded-lg items-center 
			space-y-7 flex-shrink-0 w-[420px] h-[600px] snap-center
			bg-[#2d2c2c] p-6 pt-10 scrollbar-thin overflow-x-hidden
			scrollbar-track-gray-400/20 scrollbar-thumb-[#e05abd]/40">
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
              width="30"
              height="30"
              alt={tech.title}
              key={tech._id}
            />
          ))}
        </div>
        <p className="uppercase py-3 text-gray-300">
          {experience.dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
