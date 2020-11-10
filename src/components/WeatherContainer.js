import React, { useEffect, useRef, useState } from 'react';
import DisplayWeather from './DisplayWeather';

const WeatherContainer = (props) => {
  const [units, setUnits] = useState('metric');

  const initialRender = useRef(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  //If it's the first render, set 'intialRender' to false. Otherwise, get the current weather
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
          `//api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=${units}&appid=${apiKey}`,
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
          `//api.openweathermap.org/data/2.5/weather?q=${props.location.city}&units=${units}&appid=${apiKey}`,
          { mode: 'cors' }
        );
        const weatherData = await response.json();
        props.setWeather(weatherData);
      } catch (err) {
        console.log(err);
      }
    }
  }

  //Switch from metric to imperial
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
