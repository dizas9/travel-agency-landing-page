import Image from "next/image";
import { Button } from "../ui/button";

export default function Discount() {
  return (
    <section className="bg-[#191e3b] h-fit p-5 rounded-2xl outline-2 outline-double flex flex-col md:flex-row items-center gap-2 md:gap-3 lg:mt-7">
      <div className="flex w-full items-start justify-evenly">
        <span className="w-[20%]">
          <Image src={"/images/icons/onekey.svg"} width={50} height={100} />
        </span>

        <p className="text-white w-[80%]">
          Save 10% or more on over 100,000 hotels with Member Prices. Also,
          members save up to 30% when you add a hotel to a flight
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          className="rounded-3xl bg-blue-700 text-white hover:bg-blue-900 text-xs"
        >
          Sign in
        </Button>
        <Button
          variant="ghost"
          className="rounded-3xl text-white hover:text-white hover:bg-blue-950 text-xs"
        >
          Learn more about Onekey
        </Button>
      </div>
    </section>
  );
}
