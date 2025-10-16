import { fetchWeatherApi } from "openmeteo";
import Main from "./components/Main";

const params = {
  latitude: 52.52,
  longitude: 13.41,
  daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
  hourly: ["temperature_2m", "weather_code"],
  current: [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "precipitation",
    "weather_code",
    "is_day",
    "wind_speed_10m",
  ],
  timezone: "auto",
  forecast_hours: 12,
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
  `\nCoordinates: ${latitude}°N ${longitude}°E`,
  `\nElevation: ${elevation}m asl`,
  `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
  `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`
);

const current = response.current();
const hourly = response.hourly();
const daily = response.daily();

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
  current: {
    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    temperature_2m: current.variables(0).value(),
    relative_humidity_2m: current.variables(1).value(),
    apparent_temperature: current.variables(2).value(),
    precipitation: current.variables(3).value(),
    weather_code: current.variables(4).value(),
    is_day: current.variables(5).value(),
    wind_speed_10m: current.variables(6).value(),
  },
  hourly: {
    time: [
      ...Array(
        (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000
        )
    ),
    temperature_2m: hourly.variables(0).valuesArray(),
    weather_code: hourly.variables(1).valuesArray(),
  },
  daily: {
    time: [
      ...Array(
        (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000
        )
    ),
    temperature_2m_max: daily.variables(0).valuesArray(),
    temperature_2m_min: daily.variables(1).valuesArray(),
    weather_code: daily.variables(2).valuesArray(),
  },
};

// 'weatherData' now contains a simple structure with arrays with datetime and weather data
console.log(
  `\nCurrent time: ${weatherData.current.time}`,
  `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
  `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
  `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
  `\nCurrent precipitation: ${weatherData.current.precipitation}`,
  `\nCurrent weather_code: ${weatherData.current.weather_code}`,
  `\nCurrent is_day: ${weatherData.current.is_day}`,
  `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`
);
console.log("\nHourly data", weatherData.hourly);
console.log("\nDaily data", weatherData.daily);

const App = () => {
  return (
    <div className="p-4 md:p-6">
      <Main />
    </div>
  );
};

export default App;
