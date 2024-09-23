import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({ list: [] });
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=9054724e46e3c483e6e855886eae2c5f"
        );
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center pt-[300px]">
      <h1 className="text-3xl font-semibold mb-8">Weather App</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {weatherData.list.map((weather) => (
          <WeatherCard
            key={weather.id}
            location={weather.name}
            temperature={weather.main.temp}
            description={weather.weather[0].description}
            icon={weather.weather[0].icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
