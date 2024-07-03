import DiscoverInfoCarousel from "./DiscoverInfoCarousel";

export default function DiscoverCity() {
  return (
    <section className="h-fit w-full flex flex-col gap-2">
      <p className="text-lg md:text-xl lg:text-2xl font-semibold">
        Discover what's in Your Destination
      </p>
      <DiscoverInfoCarousel />
    </section>
  );
}
