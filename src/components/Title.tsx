"use client";
import { motion } from "motion/react";

interface titleProps {
  title: string;
  color?: string;
  className?: string;
}

const titleAnimation = {
  initial: { y: -10, opacity: 0.4 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const Title = ({ title, color, className }: titleProps) => {
  return (
    <motion.div
      {...titleAnimation}
      className={`${color || "text-hcg-pastel-brown"} py-3 text-center text-3xl font-medium md:text-4xl ${className || ""}`}
    >
      {title}
    </motion.div>
  );
};

export default Title;
