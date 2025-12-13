"use client";
import { motion } from "motion/react";
import MemberCard from "@/components/MemberCard";
import { AlumniData } from "@/data/AlumniData";

const alumniMappingAnimation = () => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
});

const AlumniMapping = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {AlumniData.map(
        ({ name, role, currentOccupation, image, linkedin }, index) => (
          <motion.div
            key={index}
            {...alumniMappingAnimation()}
            className="w-2/3 sm:w-1/2 md:w-1/3"
          >
            <MemberCard
              key={index}
              name={name}
              role={role}
              currentOccupation={currentOccupation}
              image={image}
              linkedin={linkedin}
            />
          </motion.div>
        ),
      )}
    </div>
  );
};

export default AlumniMapping;
