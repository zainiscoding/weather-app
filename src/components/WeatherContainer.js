import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import DisplayWeather from './DisplayWeather';

const WeatherContainer = (props) => {
  const [units, setUnits] = useState('metric');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  const initialRender = useRef(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const loadingIcon = (
    <FontAwesomeIcon icon={faSnowflake} size='4x' className='fa-spin' />
  );
  const today = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //If it's the first render, set 'intialRender' to false. Otherwise, get the current weather
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather();
      setCurrentDay(today);
      console.log(today.getDate());
      console.log(currentDay);
    }
  }, [props.location, units]);

  function showdate() {
    console.log(today.getDate());
  }

  async function setWeatherData(response) {
    const weatherData = await response.json();
    props.setWeather(weatherData);
    console.log(weatherData);
    const weatherDataWeather = weatherData.current.weather[0];

    if (weatherDataWeather.icon === undefined) {
      setWeatherIcon('Loading...');
    }
    setWeatherIcon(
      'http://openweathermap.org/img/wn/' + weatherDataWeather.icon + '@2x.png'
    );
    props.setWeatherError(false);
  }

  async function getWeather() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.latitude}&lon=${props.location.longitude}&exclude=minutely,alerts&units=${units}&appid=${apiKey}`,
        { mode: 'cors' }
      );
      if (response.ok === false) {
        throw props.setWeatherError(true);
      } else {
        setWeatherData(response);
      }
    } catch (err) {
      console.log(err);
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
        loadingIcon={loadingIcon}
        weatherError={props.weatherError}
        location={props.location}
        currentDay={currentDay}
        months={months}
      />
      <button onClick={showdate}></button>
    </>
  );
};

export default WeatherContainer;
