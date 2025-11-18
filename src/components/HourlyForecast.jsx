import HourlyPanel from "./HourlyPanel";

// import iconSearch from "../assets/images/icon-search.svg";
// import iconSunny from "../assets/images/icon-sunny.webp";
// import iconFog from "../assets/images/icon-fog.webp";
// import iconDrizzle from "../assets/images/icon-drizzle.webp";
// import iconOvercast from "../assets/images/icon-overcast.webp";
// import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
// import iconRain from "../assets/images/icon-rain.webp";
// import iconSnow from "../assets/images/icon-snow.webp";
// import iconStorm from "../assets/images/icon-storm.webp";

const HourlyForecast = ({ data }) => {
  return (
    <div className="text-midnight-neutral-0 rounded-[20px] bg-midnight-neutral-800 px-4 lg:px-6 py-5 lg:py-6 flex flex-col gap-y-4 lg:col-start-2 lg:row-start-1 lg:row-end-4">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-preset-5">Hourly forecast</h2>

        <select className="font-sans bg-midnight-neutral-600 rounded-[8px] px-4 py-2">
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
          <option value="monday">Monday</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {/* <HourlyPanel icon={iconOvercast} hour="3" temp="68" />
        <HourlyPanel icon={iconPartlyCloudy} hour="4" temp="68" />
        <HourlyPanel icon={iconSunny} hour="3" temp="68" />
        <HourlyPanel icon={iconOvercast} hour="3" temp="68" />
        <HourlyPanel icon={iconDrizzle} hour="3" temp="68" />
        <HourlyPanel icon={iconFog} hour="3" temp="68" />
        <HourlyPanel icon={iconOvercast} hour="3" temp="68" /> */}
      </div>
    </div>
  );
};

export default HourlyForecast;
