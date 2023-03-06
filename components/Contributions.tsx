import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Contribution from "./Contribution";
import { fetchGitlab, fetchGithub } from "../utils/Util";
import _ from "lodash";
import { getGithubContributions } from "github-contributions-counter";

export default function Contributions() {
  const today = new Date();
  const oneYear = 60 * 60 * 24 * 1000 * 365;
  const fromDate = new Date(new Date().getTime() - oneYear);
  // const [events, setEvents] = useState<Event[]>([]);
  let dates = [];
  type Event = {
    [key: string]: number;
  };
  while (fromDate < today) {
    fromDate.setDate(fromDate.getDate() + 1);
    dates.push(new Date(fromDate).toISOString());
  }
  useEffect(() => {
    async function getEvents() {
      const gilabRes = await fetchGitlab();
      const groupByDates = [
        _.groupBy(gilabRes, (res) => res.created_at.split("T")[0]),
      ];
      let gitlabResult: Event = {};
      for (const [key, value] of Object.entries(groupByDates[0])) {
        gitlabResult[key] = value.length;
      }
      console.log(gitlabResult);

      const githubRes = await fetchGithub();
      let githubResult: Event = {};
      for (let i = 0; i < githubRes.length; i++) {
        for (let j = 0; j < githubRes[i].contributionDays.length; j++) {
          let item = githubRes[i].contributionDays[j];
          githubResult[item.date] = item.contributionCount;
        }
      }
      console.log(githubResult);
    }
    getEvents();
  }, []);
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
        {dates.map((day) => (
          <Contribution key={day} />
        ))}
      </motion.div>
    </div>
  );
}
