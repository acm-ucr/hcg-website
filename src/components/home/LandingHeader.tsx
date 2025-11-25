"use client";

import { motion, type Variants } from "motion/react";
import LandingPageLogo from "@/public/groupPhoto.webp";
import Image from "next/image";

const textContainer = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

const textChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const subTextAnimation = () => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: 1, duration: 0.8 },
});

const title = "Highlander Consulting Group";
const words = title.split(" ");

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

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          className="top-1/2 w-full -translate-y-1/2 p-5 text-center text-3xl font-medium text-white md:text-5xl"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  variants={textChild}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < words.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </motion.div>
        <motion.div className="mt-2 text-lg md:text-xl" {...subTextAnimation()}>
          UC Riverside's Premier Consulting Organization
        </motion.div>
      </div>
    </div>
  );
};

export default LandingHeader;
