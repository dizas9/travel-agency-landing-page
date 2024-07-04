import Discount from "@/components/Discount Section/Discount";
import DiscoverCity from "@/components/DiscoverCity/DiscoverCity";
import HeroSection from "@/components/Hero Section/HeroSection";


export default function Home() {

  return (
    <>
      <div className="min-h-[50vh] 2xl:max-w-7xl mx-auto px-5 my-10  flex flex-col gap-7">
        <HeroSection/>
        <Discount/>
        <DiscoverCity/>
      </div>
    </>
  );
}
