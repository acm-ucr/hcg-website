"use client";
import { motion } from "motion/react";

import SolutionCard from "@/components/work/SolutionCard";
import { solutionsInfos } from "@/data/SolutionCards";
import Title from "@/components/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import leftArrow from "@/public/work/leftArrow.svg";
import rightArrow from "@/public/work/rightArrow.svg";
import { useState, useEffect } from "react";

const solutionsAnimation = (delay = 0) => ({
  initial: { scale: 0 },
  whileInView: { scale: 1.0 },
  transition: {
    duration: 0.5,
    delay,
  },
});

const hoverAnimation = () => ({
  whileHover: { scale: 1.03 },
  transition: {
    duration: 0.2,
    delay: 0,
  },
});

const Solutions = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.on("select", () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <>
      <div className="mx-auto w-9/10 pb-8 md:w-5/6">
        <Title title="Solutions" className="mb-8" />
        <div className="mx-auto hidden gap-4 lg:flex">
          {solutionsInfos.map(({ cardTitle, cardText, imageSrc }, index) => (
            <motion.div key={index} {...hoverAnimation()}>
              <motion.div
                {...solutionsAnimation(index * 0.3)}
                viewport={{ once: true }}
                className="h-full"
              >
                <SolutionCard
                  cardTitle={cardTitle}
                  cardText={cardText}
                  imageSrc={imageSrc}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-4 lg:hidden">
          <button
            onClick={() => carouselApi?.scrollTo(currentIndex - 1)}
            className="cursor-pointer"
          >
            <Image src={leftArrow} alt="Left Arrow" />
          </button>
          <Carousel
            setApi={setCarouselApi}
            opts={{
              loop: true,
            }}
            className="w-3/4"
          >
            <CarouselContent>
              {solutionsInfos.map(
                ({ cardTitle, cardText, imageSrc }, index) => (
                  <CarouselItem key={index}>
                    <SolutionCard
                      cardTitle={cardTitle}
                      cardText={cardText}
                      imageSrc={imageSrc}
                    />
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
          </Carousel>
          <button
            onClick={() => carouselApi?.scrollTo(currentIndex + 1)}
            className="cursor-pointer"
          >
            <Image src={rightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Solutions;
