"use client";
import { motion } from "motion/react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

const buttonAnimation = {
  initial: { scale: 1, rotate: 0 },
  whileHover: { scale: 1.15, rotate: [0, 0, 10, 10, 0] },
};

const Button = ({ text, href }: ButtonProps) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div {...buttonAnimation}>
        <Link
          href={href}
          className="bg-hcg-gold text-hcg-white inline-block rounded-md px-4 py-2 text-sm font-thin md:text-lg"
        >
          {text}
        </Link>
      </motion.div>
    </div>
  );
};

export default Button;
