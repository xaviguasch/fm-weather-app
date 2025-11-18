import InfoPanel from "./InfoPanel";
import DailyFPanel from "./DailyFPanel";
import HourlyForecast from "./HourlyForecast";
import Header from "./Header";

import { useWeatherDataContext } from "../WeatherContext";
import { formatDate } from "../utils/formatDate";
import { weatherIcon } from "../utils/weatherIcon.js";

const FrontPage = () => {
  const { weatherData, currentCity } = useWeatherDataContext();

  console.log(weatherData);

  const userTZ = weatherData?.current?.timezone;
  const formattedDate = weatherData?.current?.time
    ? formatDate(weatherData.current.time, userTZ)
    : "Loading...";

  const weatherCode = weatherData?.current?.weather_code;
  let temperatureIcon;
  if (weatherCode === null || weatherCode == undefined) {
    temperatureIcon = "../assets/images/icon-loading.svg";
  } else {
    temperatureIcon = weatherIcon(weatherCode);
  }

  console.log(temperatureIcon);

  return (
    <div className=" flex flex-col gap-8 lg:gap-16 max-w-[1216px] mx-auto">
      <Header />
      <h1 className="text-midnight-neutral-0 text-preset-2 text-center md:px-28 px-3">
        How's the sky looking today?
      </h1>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 relative md:max-w-[720px] max-w-[656px] mx-auto w-full">
        <input
          className="bg-midnight-neutral-800 w-full rounded-xl placeholder-midnight-neutral-200 text-preset-5 py-4 pl-[60px] md:flex-[1]"
          type="text"
          placeholder="Search for a place..."
        />
        <img
          src="./assets/images/icon-search.svg"
          className=" h-8 absolute w-5 top-3 left-6"
        />
        <button className="bg-royal-blue-500 w-full text-midnight-neutral-0 text-preset-5 rounded-xl py-4 md:w-[114px]">
          Search
        </button>
      </div>

      <div className="grid grid-flow-row gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="bg-[url(./assets/images/bg-today-small.svg)] md:bg-[url(./assets/images/bg-today-large.svg)] bg-no-repeat bg-center bg-cover rounded-[20px] px-6 pt-10 pb-14 md:py-24 flex flex-col md:flex-row gap-7 md:gap-24">
          <div className="flex flex-col gap-3 text-center md:text-left w-full text-midnight-neutral-0">
            <span className="block  text-preset-4">
              {currentCity.name}, {currentCity.country}
            </span>
            <span className="block opacity-80  text-preset-6 ">
              {formattedDate}
            </span>
          </div>

          <div className="relative w-full flex flex-row">
            <img
              src={temperatureIcon}
              className=" absolute w-[120px] h-[120px] -top-3 left-2"
            />
            <span className="text-midnight-neutral-0 text-preset-1 block ml-auto">
              {weatherData?.current.temperature_2m.toFixed(0)}º
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 -mt-3 lg:col-start-1 lg:row-start-2">
          <InfoPanel
            text="Feels Like"
            data={`${weatherData?.current.temperature_2m.toFixed(0)}º`}
          />
          <InfoPanel
            text="Humidity"
            data={`${weatherData?.current.relative_humidity_2m.toFixed(0)}%`}
          />
          <InfoPanel
            text="Wild"
            data={`${weatherData?.current.wind_speed_10m.toFixed(0)} mph`}
          />
          <InfoPanel
            text="Precipitation"
            data={`${weatherData?.current.precipitation.toFixed(0)} in`}
          />
        </div>

        <div className="flex flex-col gap-5 lg:col-start-1 lg:row-start-3 lg:row-end-3">
          <h2 className="text-preset-5 text-midnight-neutral-0">
            Daily forecast
          </h2>

          {/* <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
            <DailyFPanel day="Tue" icon={iconRain} maxTemp={68} minTemp={57} />
            <DailyFPanel
              day="Tue"
              icon={iconDrizzle}
              maxTemp={68}
              minTemp={57}
            />
            <DailyFPanel day="Tue" icon={iconSunny} maxTemp={68} minTemp={57} />
            <DailyFPanel
              day="Tue"
              icon={iconPartlyCloudy}
              maxTemp={68}
              minTemp={57}
            />
            <DailyFPanel day="Tue" icon={iconStorm} maxTemp={68} minTemp={57} />
            <DailyFPanel day="Tue" icon={iconSnow} maxTemp={68} minTemp={57} />
            <DailyFPanel day="Tue" icon={iconFog} maxTemp={68} minTemp={57} />
          </div> */}
        </div>

        <HourlyForecast />
      </div>
    </div>
  );
};

export default FrontPage;
