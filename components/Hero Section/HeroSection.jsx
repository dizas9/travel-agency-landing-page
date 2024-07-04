import Planning from "../Planning Form/Planning";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-5 lg:relative mt-10">
      <HeroCarousel />
      <div className="lg:absolute lg:bottom-[-2rem] lg:-translate-x-1/2 md:-translate-x-0 -translate-x-0 lg:left-1/2 lg:w-[80%]">
        <Planning />
      </div>
    </section>
  );
}
