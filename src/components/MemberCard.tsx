"use client";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export interface MemberCardProps {
  name: string;
  role: string;
  image: StaticImageData;
  currentOccupation?: string;
  linkedin: string;
}

const cardAnimation = {
  whileHover: { scale: 1.1 },
};

const MemberCard = ({
  image,
  name,
  role,
  currentOccupation,
  linkedin,
}: MemberCardProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-between p-6 text-center">
      <Image src={image} alt={name} className="mb-4 w-64 rounded-full" />

      <div className="text-md mb-2 md:text-xl">{name}</div>

      <div className="text-hcg-dark-gray md:text-md mb-2 text-sm font-normal">
        {role}
      </div>

      {currentOccupation && (
        <div className="text-hcg-dark-gray md:text-md mb-4 flex-grow text-sm">
          {currentOccupation}
        </div>
      )}
      <motion.div {...cardAnimation}>
        <Link href={linkedin} target="_blank" className="mt-auto">
          <FaLinkedin className="text-hcg-gold h-8 w-8 md:h-12 md:w-12" />
        </Link>
      </motion.div>
    </div>
  );
};

export default MemberCard;
