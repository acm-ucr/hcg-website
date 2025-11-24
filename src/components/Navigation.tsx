"use client";

import navbarLinks from "@/data/NavbarData";
import Link from "next/link";
import Image from "next/image";
import SmallLogo from "@/public/smallLogo.svg";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const hoverAnimation = {
  whileHover: { scale: 1.05 },
  transition: {
    duration: 0.6,
  },
};

const Navigation = () => {
  const [visibility, toggleVisibility] = useState(false);

  const toggleIconVisibility = () => {
    toggleVisibility(!visibility);
  };

  const path = usePathname();

  return (
    <div>
      <div className="from-hcg-black to-hcg-gold fixed inset-x-0 top-0 z-50 flex h-[15vh] items-center justify-between bg-linear-to-r p-8">
        <div className="sticky flex w-full">
          <Link href="/">
            <Image
              src={SmallLogo}
              alt="SmallLogo"
              className="h-14 w-auto md:h-18"
            />
          </Link>
        </div>

        <div className="text-hcg-white hidden h-auto items-center gap-8 pr-8 text-xl md:flex">
          {navbarLinks.map(({ name, link }, index) => (
            <motion.div {...fadeIn(index * 0.15)} key={index} className="w-max">
              <motion.div {...hoverAnimation}>
                <Link
                  href={link}
                  className={`${path === link && "underline underline-offset-2"}`}
                >
                  {name}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn(0.15)}>
          <button
            className="text-hcg-white flex cursor-pointer text-3xl md:hidden"
            onClick={toggleIconVisibility}
          >
            {visibility ? <HiXMark /> : <FaBars />}
          </button>
        </motion.div>
      </div>

      <div
        className={`from-hcg-black to-hcg-gold text-hcg-white fixed top-[15vh] right-0 left-0 z-50 flex flex-col items-center justify-start bg-linear-to-r transition-all duration-300 md:hidden ${
          visibility
            ? "pointer-events-auto max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex w-full max-w-xl flex-col gap-2 pb-4">
          {navbarLinks.map(({ name, link }, i) => (
            <motion.div
              animate={{ opacity: visibility ? 1 : 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              key={i}
              className="h-min w-full text-center"
            >
              <motion.div {...hoverAnimation} className="inline-block">
                <Link
                  href={link}
                  className={`text-2xl ${path === link && "underline underline-offset-2"}`}
                  onClick={toggleIconVisibility}
                >
                  {name}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
