"use client"
import { FaStarAndCrescent } from "react-icons/fa6";

export default function Logo() {
  return (
    <div className="flex items-center  w-fit relative">
      <span className="">
        <FaStarAndCrescent size={25} color="red"  />
      </span>
      <span className="text-md z-50  font-semibold bg-[rgba(4,11,20,0.2)] rounded-md text-[white] -rotate-45 shadow-black shadow-md">
        GO
      </span>
      <span className="text-2xl  font-extrabold text-blue-950 left-[2.8rem] absolute">
        TURKEY
      </span>
    </div>
  );
}
