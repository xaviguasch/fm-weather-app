import { createContext, useContext, useState, useEffect } from "react";
import { getWeatherData } from "./utils/getWeather";
import { getLocation } from "./utils/getLocation";

const WeatherDataContext = createContext();

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState({
    name: "London",
    lat: 51.51,
    long: -0.13,
    country: "England",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingWeatherData() {
      try {
        // Put the loading to true
        setWeatherData(null);
        const geocodes = await getLocation(currentCity.name);
        const { lat, long, city, country } = geocodes.data;
        setCurrentCity((prev) => ({ lat, long, name: city, country }));
        const result = await getWeatherData({ ...currentCity, lat, long });
        setWeatherData(result);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err}`);
      } finally {
        // Put the loading to false
        // testing, delete
        console.log(currentCity);
      }
    }
    fetchingWeatherData();
  }, [currentCity.name]);

  return (
    <WeatherDataContext.Provider
      value={{ currentCity, setCurrentCity, weatherData, error }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}

export function useWeatherDataContext() {
  const context = useContext(WeatherDataContext);

  return context;
}
