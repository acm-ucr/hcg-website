"use client";
import Image, { StaticImageData } from "next/image";
import { motion, type Variants } from "motion/react";
interface HeaderProps {
  title: string;
  headerPicture: StaticImageData;
}

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

const staggerLetters = () => ({
  variants: { textContainer },
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
});

const Header = ({ title, headerPicture }: HeaderProps) => {
  return (
    <div className="relative mb-4 h-[28vh] w-full md:h-[38vh] xl:h-[52vh]">
      <Image
        src={headerPicture}
        alt="General Header"
        fill
        className="object-cover object-top"
        priority
      />
      <motion.div
        className="absolute top-1/2 w-full -translate-y-1/2 p-5 text-center text-3xl font-medium text-white md:text-5xl"
        {...staggerLetters()}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={textChild}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
