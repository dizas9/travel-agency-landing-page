"use client";
import React from "react";
import Logo from "./Logo";
import { useScreenResize } from "@/contexts/ScreenResize";
// icons
import { FaUserCircle } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoGlobeSharp } from "react-icons/io5";


import Navmenu from "./Navmenu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuDemo } from "./DropDownMenu";

export default function Header() {
  const { screenSize } = useScreenResize();
  return (
    <section className="mx-auto 2xl:max-w-7xl px-5 my-5 flex justify-between w-full items-center cursor-pointer ">
      {/* logo */}
      <div className="flex gap-28">
        <Logo />
        {screenSize >= 600 && (
          <DropdownMenuDemo/>
        )}
      </div>

      {/* Nav sction */}
      <div className=" w-1/2 md:w-fit flex  items-center md:gap-5 justify-between cursor-pointer">
        {/* download + language section */}

        <div className="flex gap-5 items-center">
          <button className="max-w-2/3 border py-1 px-2 rounded-xl text-sm font-semibold flex items-center justify-around hover:bg-slate-100">
            <span>
              <MdFileDownload size={15} color="blue" />
            </span>
            <span>Get the App</span>
          </button>

          {/* language toggle */}
          {screenSize >= 700 && (
            <div className="flex gap-2">
              <span>
                <IoGlobeSharp size={20} />
              </span>

              <span className="text-sm font-semibold  hover:text-[blue]">
                English
              </span>
            </div>
          )}
        </div>

        {/* nav items */}
        <Navmenu />

        <div className="flex items-center gap-5">
          {" "}
          {screenSize >= 750 && (
            <span className="text-sm font-semibold  hover:text-[blue]">
              Sign in
            </span>
          )}
          {/* account circle */}
          {screenSize <= 820 && (
            <span>
              <FaUserCircle size={22} />
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
