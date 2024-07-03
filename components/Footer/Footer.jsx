import { ExploreMenu, HelpMenu, PoliciesMenu, companyMenu } from "@/Data/FooterData";
import Logo from "../Header/Logo";

export default function Footer() {
  return (
    <section className="h-fit 2xl:max-w-7xl mx-auto px-5 my-5  flex flex-col">
      <span className="bg-white w-fit  my-5">
        <Logo />
      </span>
      <div className="flex flex-col w-full md:flex-row lg:gap-7">
        {/*Company + Explore  */}
        <div className="flex flex-col md:flex-row md:gap-7 lg:justify-between  md:w-[49%] lg:w-1/2 ">
          {/* company */}
          <div className="">
            <p className="text-md font-semibold py-2">Company</p>
            {companyMenu.map((item, idx) => (
              <li
                className="list-none text-xs text-[blue] pb-1 lg:pb-2 hover:underline cursor-pointer"
                key={idx}
              >
                {item.name}
              </li>
            ))}
          </div>

          {/* Explore */}
          <div className="">
            <p className="text-md font-semibold py-2">Explore</p>
            {ExploreMenu.map((item, idx) => (
              <li
                className="list-none text-xs text-[blue] pb-1 lg:pb-2  hover:underline cursor-pointer"
                key={idx}
              >
                {item.name}
              </li>
            ))}
          </div>
        </div>

        {/*Policies + Help  */}
        <div className="flex flex-col md:flex-row md:gap-7 lg:justify-between md:w-[49%] lg:w-1/2  ">
          {/* Policies */}
          <div className="">
            <p className="text-md font-semibold py-2">Policies</p>
            {PoliciesMenu.map((item, idx) => (
              <li
                className="list-none text-xs text-[blue] pb-1 lg:pb-2  hover:underline cursor-pointer"
                key={idx}
              >
                {item.name}
              </li>
            ))}
          </div>
          {/* Help */}
          <div className="">
            <p className="text-md font-semibold py-2">Help</p>
            {HelpMenu.map((item, idx) => (
              <li
                className="list-none text-xs text-[blue] pb-1 lg:pb-2  hover:underline cursor-pointer"
                key={idx}
              >
                {item.name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
