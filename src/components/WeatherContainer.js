import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import DisplayWeather from './DisplayWeather';

const WeatherContainer = (props) => {
  const [units, setUnits] = useState('metric');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherError, setWeatherError] = useState(false);

  const initialRender = useRef(true);
  const apiKey = process.env.REACT_APP_API_KEY;
  const loadingIcon = (
    <FontAwesomeIcon icon={faSnowflake} size='4x' className='fa-spin' />
  );

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
    const weatherDataWeather = weatherData.weather[0];

    if (weatherDataWeather.icon === undefined) {
      setWeatherIcon('Loading...');
    }
    setWeatherIcon(
      'http://openweathermap.org/img/wn/' + weatherDataWeather.icon + '@2x.png'
    );

    let weatherDescription = weatherDataWeather.description;
    setWeatherDescription(
      weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    );
    setWeatherError(false);
  }

  async function getWeather() {
    if (props.location.city === undefined) {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=${units}&appid=${apiKey}`,
          { mode: 'cors' }
        );
        if (response.ok === false) {
          throw setWeatherError(true);
        } else {
          setWeatherData(response);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(
          `//api.openweathermap.org/data/2.5/weather?q=${props.location.city}&units=${units}&appid=${apiKey}`,
          { mode: 'cors' }
        );
        if (response.ok === false) {
          throw setWeatherError(true);
        } else {
          setWeatherData(response);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  //   async function getWeather() {
  //     try {
  //       const response = await fetch(
  //         `//api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=7c96ea14ab892a5bb3382ee2bb277434`,
  //         { mode: 'cors' }
  //       );
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  // console.log("error above")
  //     }
  //   }

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
        weatherDescription={weatherDescription}
        loadingIcon={loadingIcon}
        weatherError={weatherError}
      />
    </>
  );
};

export default WeatherContainer;
