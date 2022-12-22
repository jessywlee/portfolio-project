import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft: boolean;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group flex relative">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill.skillImage).url()}
        alt={skill?.title}
        className="w-20 h-20 xl:w-28 xl:h-28 filter group-hover:grayscale
				transition duration-200 ease-in-out p-2"
      />
    </div>
  );
}
