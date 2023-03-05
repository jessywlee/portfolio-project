import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Contribution from "./Contribution";
import { fetchGitlab } from "../utils/Util";
import _ from "lodash";

export default function Contributions() {
  const today = new Date();
  const oneYear = 60 * 60 * 24 * 1000 * 365;
  const fromDate = new Date(new Date().getTime() - oneYear);
  const [events, setEvents] = useState<Events[]>();
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
      const res = await fetchGitlab();
      const groupByDates = [
        _.groupBy(res, (res) => res.created_at.split("T")[0]),
      ];
      let result: Event = {};
      for (const [key, value] of Object.entries(groupByDates[0])) {
        result[key] = value.length;
      }
      console.log(result);
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
