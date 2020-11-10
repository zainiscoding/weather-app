import React, { useEffect, useRef, useState } from 'react';
import DisplayWeather from './DisplayWeather';

const WeatherContainer = (props) => {
  const [units, setUnits] = useState('metric');

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather();
    }
  }, [props.location, units]);

  async function getWeather() {
    if (props.location.city === undefined) {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=${units}&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
          { mode: 'cors' }
        );
        const weatherData = await response.json();
        props.setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?q=${props.location.city}&units=${units}&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
          { mode: 'cors' }
        );
        const weatherData = await response.json();
        props.setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function changeUnits() {
    if (units === 'metric') {
      setUnits('imperial');
    } else {
      setUnits('metric');
    }
  }

  return (
    <>
      <DisplayWeather weather={props.weather} changeUnits={changeUnits} />
    </>
  );
};

export default WeatherContainer;
