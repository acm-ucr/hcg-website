"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

type CarouselItem = {
  name: string;
  icon: StaticImageData;
};

const logoCarouselAnimation = (totalWidth = 0, duration = 0) => ({
  animate: { x: [0, -totalWidth] },
  transition: {
    ease: "linear" as const,
    duration,
    repeat: Infinity,
  },
});

const logoHoverAnimation = () => ({
  whileHover: {
    scale: 1.15,
    rotate: 3,
  },
});

const LogoCarousel = ({ data }: { data: CarouselItem[] }) => {
  const duplicatedData = [...data, ...data, ...data, ...data];
  const totalWidth = data.length * 192;
  const SPEED = 70;
  const duration = totalWidth / SPEED;
  return (
    <div className="bg-hcg-white w-full overflow-hidden">
      <motion.div
        className="flex items-center"
        {...logoCarouselAnimation(totalWidth, duration)}
      >
        {duplicatedData.map(({ name, icon }, index) => (
          <motion.div
            key={index}
            {...logoHoverAnimation()}
            className="bg-hcg-white flex w-48 flex-shrink-0 items-center justify-center px-8 py-4"
          >
            <Image
              src={icon}
              alt={`${name} logo`}
              className="w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
