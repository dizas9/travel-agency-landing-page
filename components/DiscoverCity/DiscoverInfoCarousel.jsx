"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { CityInfo } from "@/Data/City";
import { Card, CardContent } from "../ui/card";
import { useHover } from "@/contexts/HoverEffect";

export default function DiscoverInfoCarousel() {
  const { hoverItem, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div className="w-full ">
      <Carousel className="h-fit">
        <CarouselContent className="-ml-1">
          {CityInfo.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-3 lg:pl-5 md:pl-5  lg:basis-[20%] md:basis-[30%] basis-[50%] "
            >
              <div
                className="h-fit rounded-md min-h-[15rem] flex items-center justify-center relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  className="flex items-center justify-center lg:h-[45vh] md:h-[30vh] h-[30vh] w-full lg:object-fill rounded-md transition-all duration-1000 ease-in-out hover:object-cover"
                  src={item.src}
                  width={6000}
                  height={200}
                />

                {/* description */}
                <p className="absolute bottom-1 left-2 text-lg font-semibold text-[white] z-30">
                  {item.name}
                </p>

                {hoverItem === index && (
                  <div className="absolute h-full w-full bg-[#1f111184] rounded-md">
                    <Button
                      variant="ghost"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline-double outline-offset-1 outline-[#a3a37c98] text-white"
                    >
                      {item.sites} sites
                    </Button>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-[-1.5rem]   top-1/2 transform -translate-y-1/2 bg-[#270606e1] p-2 rounded-full shadow-lg z-10 -none" />
        <CarouselNext className="absolute right-[-1.5rem]  top-1/2 transform -translate-y-1/2 bg-[#834343e1] p-2 rounded-full shadow-lg z-10 border-none" />
      </Carousel>
    </div>
  );
}
