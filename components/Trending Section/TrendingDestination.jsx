import { TredingSites } from "@/Data/TredingPoints";
import Image from "next/image";

export default function TrendingDestination() {
  return (
    <section className="h-fit w-full flex flex-col gap-2">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold">
        Trending destinations
      </p>
      <p className="font-light">
        Most popular choices for travelers from Turkey
      </p>

      {/* Content section */}

      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <span className="w-full relative flex-wrap overflow-hidden rounded-md">
            <Image
              src={TredingSites[0].src}
              width={800}
              height={200}
              className="rounded-md hover:scale-105 transition-all duration-300 ease-linear"
            />
            <div className="absolute top-[0.5rem] left-[1rem]">
              <p className=" text-xl text-[white] font-extrabold">
                {TredingSites[0].name}
              </p>
              <p className="text-sm text-[yellow] font-extralight">
                {TredingSites[0].city}
              </p>
            </div>
          </span>
          <span className="w-full relative flex-wrap overflow-hidden rounded-md">
            <Image
              src={TredingSites[1].src}
              width={800}
              height={200}
              className="rounded-md hover:scale-105 transition-all duration-300 ease-linear"
            />

            <div className="absolute top-[0.5rem] left-[1rem]">
              <p className=" text-xl text-[white] font-extrabold">
                {TredingSites[1].name}
              </p>
              <p className="text-sm text-[yellow] font-extralight">
                {TredingSites[1].city}
              </p>
            </div>
          </span>
        </div>

        <div className="w-full flex flex-wrap items-center justify-around">
          {TredingSites.slice(2).map((item, idx) => (
            <div
              className="w-1/2 lg:p-3 md:p-3 p-1 md:w-1/3 relative flex-wrap overflow-hidden "
              key={idx}
            >
              <Image
                src={item.src}
                width={400}
                height={200}
                objectFit="fill"
                className="rounded-md h-[10rem] md:h-[10rem] hover:scale-105 transition-all duration-300 ease-linear"
              />

              <div className="absolute top-[1rem] left-[1rem]">
                <p className="text-md text-[white] font-extrabold">
                  {item.name}
                </p>
                <p className="text-sm text-[yellow] font-extralight">
                  {item.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
