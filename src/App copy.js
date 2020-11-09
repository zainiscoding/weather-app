import React, { useEffect, useState } from 'react';
import getWeather from './components/GetWeatherContainer';
// import getWeather from './components/GetWeatherContainer';

const App = () => {
  let [weather, setWeather] = useState({});
  let [img, setImg] = useState('');
  let [coordinates, setCoordinates] = useState({});

  let newCoords = {};
  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      newCoords.latitude = position.coords.latitude;
      newCoords.longitude = position.coords.longitude;
    });
    return newCoords;
  }

  useEffect(() => {
    setCoordinates({ latitude: 0, longitude: 0 });
  }, []);

  useEffect(() => {
    setTimeout(function () {
      console.log(coordinates);
      getWeather();
    }, 5000);
  }, []);

  // useEffect(() => {
  //   setCoordinates((prevState) => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       prevState.latitude = position.coords.latitude;
  //     });
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       prevState.longitude = position.coords.longitude;
  //     });
  //     return prevState;
  //   });
  // }, []);

  async function getWeather() {
    try {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
        { mode: 'cors' }
        // `//api.openweathermap.org/data/2.5/weather?q=Tokyo, JP&appid=f9b7f2a3f00f9e5810f5267b2fdacf8c`,
        // { mode: 'cors' }
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
        <button onClick={getWeather}>WEATHEsR!</button>
        <h2>weather</h2>
        <p>{JSON.stringify(weather)}</p>
        <h2>Coords</h2>
        {coordinates !== undefined && (
          <>
            <p>{coordinates.latitude}</p>
            <p>{coordinates.longitude}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
