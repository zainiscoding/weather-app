import React, { useEffect, useState, useRef } from 'react';
import getWeather from './components/GetWeatherContainer';
// import getWeather from './components/GetWeatherContainer';

const App = () => {
  let [weather, setWeather] = useState({});
  let [coordinates, setCoordinates] = useState({});

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  const initialRender = useRef(true);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      getWeather();
    }
  }, [coordinates]);

  async function getWeather() {
    try {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
        { mode: 'cors' }
      );
      const weatherData = await response.json();
      setWeather(weatherData);
      console.log(weatherData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='App'>
      <div id='weatherWrapper'>
        <button onClick={getWeather}>WEATHER!</button>
        <h2>weather</h2>
        <p>{JSON.stringify(weather)}</p>
        <h2>Coords</h2>
        <p>{coordinates.latitude}</p>
        <p>{coordinates.longitude}</p>
      </div>
    </div>
  );
};

export default App;
