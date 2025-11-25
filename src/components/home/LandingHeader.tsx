"use client";

import { motion } from "motion/react";
import LandingPageLogo from "@/public/groupPhoto.webp";
import Image from "next/image";

const headerAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

const LandingHeader = () => {
  return (
    <div className="relative flex h-[75vh] w-full flex-col items-center justify-center">
      <Image
        src={LandingPageLogo}
        alt="General Header"
        fill
        className="object-cover opacity-100"
        priority
      />

      <div className="text-hcg-white absolute content-center text-center opacity-100">
        <motion.div
          className="text-4xl font-bold md:text-6xl"
          {...headerAnimation}
        >
          Highlander Consulting Group
        </motion.div>
        <motion.div {...headerAnimation} className="text-lg md:text-xl">
          UC Riverside's Premier Consulting Organization
        </motion.div>
      </div>
    </div>
  );
};

export default LandingHeader;
