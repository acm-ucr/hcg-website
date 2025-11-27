"use client";
import Image, { StaticImageData } from "next/image";

interface SolutionCardProps {
  cardTitle: string;
  cardText: string;
  imageSrc: StaticImageData;
}

const SolutionCard = ({ cardTitle, cardText, imageSrc }: SolutionCardProps) => {
  return (
    <div className="bg-hcg-pastel-brown-secondary h-full w-full rounded-lg p-4 md:p-6">
      <div className="flex h-full flex-col items-center space-y-4 rounded-lg border-3 border-white px-2 pt-2 text-center text-white md:space-y-8">
        <Image
          src={imageSrc}
          alt={"Image of " + cardTitle}
          height={70}
          className="mt-2"
        />
        <div className="text-md font-bold md:text-xl">{cardTitle}</div>
        <p className="mb-5 text-sm font-thin md:text-lg">{cardText}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
