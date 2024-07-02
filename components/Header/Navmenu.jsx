"use client";
// icons
import { MdInsertComment } from "react-icons/md";
import { useScreenResize } from "@/contexts/ScreenResize";

export default function Navmenu() {
  const navMenu = [
    { name: "Book Your Seat" },
    { name: "Supports" },
    { name: "Trips" },
  ];

  const { screenSize } = useScreenResize();
  return (
    <div className="flex text-sm font-semibold gap-5 items-center">
      {/* for screen greater then 1280px */}
      {screenSize >= 1020 &&
        navMenu.map((item, idx) => (
          <li className="list-none hover:text-[blue] cursor-pointer" key={idx}>
            {item.name}
          </li>
        ))}

      {/* for tablet */}
      {screenSize <= 1020 && screenSize > 600 && (
        <li className="list-none hover:text-[blue] cursor-pointer">
          {navMenu[2].name}
        </li>
      )}

      {screenSize > 600 && (
        <MdInsertComment size={20} className="cursor-pointer" />
      )}
    </div>
  );
}
