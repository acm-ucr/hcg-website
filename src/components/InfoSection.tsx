"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Title from "@/components/Title";

export interface InfoSectionProps {
  title: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
}

const infoSectionHeaderAnimation = {
  initial: { opacity: 0, x: -50},
  whileInView: {  opacity: 1, x: 0 },
  transition: { duration: 0.4, delay: 0.1 },
  viewport: { once: true, amount: 1.0 },
}

const infoSectionTextAnimation = {
  initial: {  opacity: 0, y: -50 },
  whileInView: {  opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: 0.2},
  viewport: { once: true, amount: 0.8},
};

const imageAnimation = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.3, delay:0.1 },
  viewport: { once: true, amount: 0.5 },
};

const InfoSection = ({ title, text, image, imageAlt }: InfoSectionProps) => {
  return (
    <div>
      <div className="mx-auto flex w-5/6 flex-row items-center justify-center py-4 md:py-8">
        <div className="flex flex-col justify-center space-y-3 md:w-1/2 md:space-y-6">
          <motion.div
            className="mx-auto md:mr-auto md:ml-0"
            {...infoSectionHeaderAnimation}
          >
            <Title title={title} color={"text-hcg-pastel-brown"} />
          </motion.div>
          <motion.p
            className="text-md flex items-center justify-center text-center font-normal md:w-3/4 md:text-left md:text-xl"
            {...infoSectionTextAnimation}
          >
            {text}
          </motion.p>
        </div>
        <motion.div
          className="hidden h-auto w-1/2 justify-center md:flex"
          {...imageAnimation}
        >
          <Image src={image} alt={imageAlt} />
        </motion.div>
      </div>
      <div className="mx-auto mb-5 w-5/6 md:hidden">
        <Image src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoSection;
