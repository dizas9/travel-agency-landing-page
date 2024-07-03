import { RiArrowDropDownLine } from "react-icons/ri";
import { RiHotelFill } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import { IoCarSharp } from "react-icons/io5";
import { MdTrolley } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  // navmenu data
  const navMenuData = [
    {
      name: "Stays",
      icon: <RiHotelFill size={22} />,
    },
    {
      name: "Flights",
      icon: <MdFlight size={22} />,
    },
    {
      name: "Cars",
      icon: <IoCarSharp size={22} />,
    },
    {
      name: "Packages",
      icon: <MdTrolley size={22} />,
    },
    {
      name: "Cruises",
      icon: <GiCruiser size={22} />,
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer flex text-xs items-center font-semibold hover:bg-slate-100 px-1 rounded-md">
          <span className="">Shop Travel</span>
          <RiArrowDropDownLine size={30} />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[20rem]">
        <DropdownMenuGroup>
          {navMenuData.map((item, idx) => (
            <DropdownMenuItem key={idx}>
              <div className="flex gap-2 my-2">
                <span>{item.icon}</span>

                <span className="text-sm font-extrabold">{item.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 my-2">
          <DropdownMenuItem>Deals</DropdownMenuItem>
          <DropdownMenuItem>Groups & Meetings</DropdownMenuItem>
          <DropdownMenuItem>Ours Blogs</DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
