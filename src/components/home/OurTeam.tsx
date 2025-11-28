"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";
import Title from "@/components/Title";

const textAnimation = {
  initial: { x: -30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const OurTeam = () => {
  return (
    <div className="bg-hcg-gray py-8 text-center">
      <Title title={"Our Team"} color="text-black" />
      <motion.p
        {...textAnimation}
        className="text-hcg-black text-md mx-auto mb-8 w-1/2 md:text-xl"
      >
        Our members come from all majors and bring leadership experiences from a
        wide variety of professional backgrounds:
      </motion.p>
      <Button text="Learn More" href="/board" />
    </div>
  );
};

export default OurTeam;
