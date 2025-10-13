import InfoPanel from "./InfoPanel";

import iconSearch from "../assets/images/icon-search.svg";
import iconSunny from "../assets/images/icon-sunny.webp";

const Main = () => {
  return (
    <div className="mt-12 flex flex-col gap-8">
      <h1 className="text-midnight-neutral-0 text-preset-2 text-center">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col gap-3 relative">
        <input
          className="bg-midnight-neutral-800 w-full rounded-xl placeholder-midnight-neutral-200 text-preset-5 py-4 pl-[60px]"
          type="text"
          placeholder="Search for a place..."
        />
        <img src={iconSearch} className=" h-8 absolute w-5 top-3 left-6" />
        <button className="bg-royal-blue-500 w-full text-midnight-neutral-0 text-preset-5 rounded-xl py-4">
          Search
        </button>
      </div>

      <div className="bg-[url(./assets/images/bg-today-small.svg)] md:bg-[url(./assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover rounded-[20px] px-6 pt-10 pb-14 flex flex-col gap-7">
        <div className="flex flex-col gap-3 text-center w-full text-midnight-neutral-0">
          <span className="block  text-preset-4">Berlin, Germany</span>
          <span className="block opacity-80  text-preset-6">
            Tuesday, Aug 5, 2025
          </span>
        </div>

        <div className="relative w-full flex flex-row ">
          <img
            src={iconSunny}
            className=" absolute w-[120px] h-[120px] -top-3 left-2"
          />
          <span className="text-midnight-neutral-0 text-preset-1 block ml-auto">
            68º
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InfoPanel text="Feels Like" data="64º" />
        <InfoPanel text="Humidity" data="46%" />
        <InfoPanel text="Wild" data="9 mph" />
        <InfoPanel text="Precipitation" data="0 in" />
      </div>
    </div>
  );
};

export default Main;
