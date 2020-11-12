import React, { useState } from 'react';
import MapLocationContainer from './components/MapLocationContainer';
import WeatherContainer from './components/WeatherContainer';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState();

  return (
    <div id='App'>
      <MapLocationContainer
        location={location}
        setLocation={setLocation}
        weather={weather}
      />
      <WeatherContainer
        weather={weather}
        setWeather={setWeather}
        location={location}
      />
    </div>
  );
};

export default App;
