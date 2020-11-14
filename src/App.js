import React, { useState } from 'react';
import MapLocationContainer from './components/MapLocationContainer';
import WeatherContainer from './components/WeatherContainer';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState();
  const [weatherError, setWeatherError] = useState(false);

  return (
    <div id='App'>
      <MapLocationContainer
        setLocation={setLocation}
        setWeather={setWeather}
        setWeatherError={setWeatherError}
      />
      <WeatherContainer
        weather={weather}
        setWeather={setWeather}
        location={location}
        weatherError={weatherError}
        setWeatherError={setWeatherError}
      />
    </div>
  );
};

export default App;
