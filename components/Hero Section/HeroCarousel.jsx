"use client";
import { HeroCaroselImage } from "@/Data/HeroCaroselData";
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

export default function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel
      className="w-full h-fit  rounded-md  relative overflow-hidden"
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {HeroCaroselImage.map((item, index) => (
          <CarouselItem key={index} className="flex gap-0 pl-0">
            <div className="w-full lg:flex lg:items-center lg:justify-center">
              <Image
                className="flex items-center justify-center lg:h-[45vh]  md:h-[30vh] h-[30vh] w-full lg:object-fill"
                src={item.src}
                width={6000}
                height={400}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 lg:left-[90%] lg:top-[80%] top-1/2 transform -translate-y-1/2 bg-[#834343e1] p-2 rounded-full shadow-lg z-10" />
      <CarouselNext className="absolute right-4 lg:right-6  top-1/2 lg:top-[80%] transform -translate-y-1/2 bg-[#834343e1] p-2 rounded-full shadow-lg z-10" />

      {/* Title */}

      <div className=" absolute top-[60%] md:top-[50%] left-[50%] md:left-[40%] lg:left-[35%] -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] bg-[#d2c1c199] p-2 ">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[White] lg:pb-1">
          The perfect Planning for your special trip
        </p>

        <p className="text-lg lg:text-xl text-white pb-2 md:pb-3 lg:pb-5">
          Discover dreamy vacation homes all over the Trukey
        </p>

        <Button variant="secondary" className="">Discover</Button>
      </div>
    </Carousel>
  );
}
