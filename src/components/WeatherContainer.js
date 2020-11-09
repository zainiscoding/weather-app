import React, { useEffect, useState, useRef } from 'react';
import Weather from './Weather';

const WeatherContainer = (props) => {
  const [weather, setWeather] = useState();

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather();
    }
  }, [props.coordinates]);

  async function getWeather() {
    try {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      setWeather({ weatherData });
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Weather weather={weather} />
    </>
  );
};

export default WeatherContainer;
