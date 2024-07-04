import { Button } from "../ui/button";
import { DatePicker } from "./PickDate";
import { SearchPlaceBox } from "./SearchPlace";

export default function Planning() {
  return (
    <section className="flex flex-col bg-yellow-600 w-full h-fit rounded-md ">
      <form className="flex flex-col lg:flex-row  p-1 lg:p-5 md:p-3 gap-1 md:gap-2">
        <SearchPlaceBox className="w-full h-10 bg-white" />
        <div className="w-full h-10  lg:w-[25%] bg-white rounded-md ">
          <DatePicker />
        </div>
        <div className="w-full   h-10 lg:w-[45%] bg-white rounded-md px-4 flex items-center">
          <div className="flex w-full md:w-2/3 lg:w-full">
            <div className="w-1/3 flex items-center flex-wrap  gap-0.5">
              <label htmlFor="adult" className="font-semibold text-sm">
                Adult
              </label>
              <input
                type="number"
                className="border border-red-500 w-[3rem] pl-1"
                placeholder={1}
              />
            </div>

            <div className="w-1/3 flex items-center flex-wrap  gap-0.5">
              <label htmlFor="adult" className="font-semibold text-sm">
                Children
              </label>
              <input
                type="number"
                className="border border-red-500 w-[2rem] pl-1"
                placeholder={1}
              />
            </div>

            <div className="w-1/3 flex items-center flex-wrap  gap-0.5">
              <label htmlFor="adult" className="font-semibold text-sm">
                Room
              </label>
              <input
                type="number"
                className="border border-red-500 w-[3rem] pl-1"
                placeholder={1}
              />
            </div>
          </div>
        </div>

        <Button variant="secondary" className="bg-blue-700 text-white">
          Search
        </Button>
      </form>
    </section>
  );
}
