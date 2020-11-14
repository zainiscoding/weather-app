import { useEffect, useRef, useState } from 'react';
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

  //If it's the first render, set 'intialRender' to false. Otherwise, get the current weather
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather();
      setCurrentDay(today);
    }
    // eslint-disable-next-line
  }, [props.location, units]);

  async function setWeatherData(response) {
    const weatherData = await response.json();
    props.setWeather(weatherData);
    const weatherDataWeather = weatherData.current.weather[0];

    if (weatherDataWeather.icon === undefined) {
      setWeatherIcon('Loading...');
    }
    setWeatherIcon(
      'https://openweathermap.org/img/wn/' + weatherDataWeather.icon + '@2x.png'
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
      />
    </>
  );
};

export default WeatherContainer;
