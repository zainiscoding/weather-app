import React, { useEffect, useRef, useState } from 'react';
import DisplayWeather from './DisplayWeather';

const WeatherContainer = (props) => {
  const [units, setUnits] = useState('metric');
  const [weatherIcon, setWeatherIcon] = useState('');

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

  async function setWeatherData(response) {
    const weatherData = await response.json();
    props.setWeather(weatherData);
    setWeatherIcon(
      'http://openweathermap.org/img/wn/' +
        weatherData.weather[0].icon +
        '@2x.png'
    );
  }

  async function getWeather() {
    if (props.location.city === undefined) {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=${units}&appid=${apiKey}`,
          { mode: 'cors' }
        );
        setWeatherData(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?q=${props.location.city}&units=${units}&appid=${apiKey}`,
          { mode: 'cors' }
        );
        setWeatherData(response);
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
      <DisplayWeather
        weather={props.weather}
        changeUnits={changeUnits}
        weatherIcon={weatherIcon}
      />
    </>
  );
};

export default WeatherContainer;
