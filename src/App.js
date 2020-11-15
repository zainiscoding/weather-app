import { useState } from 'react';
import MapLocationContainer from './components/MapLocationContainer';
import WeatherContainer from './components/WeatherContainer';
import DisplayGithubLink from './components/DisplayGithubLink';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
  const [location, setLocation] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
    city: 'Tokyo',
  });
  const [weather, setWeather] = useState();
  const [weatherError, setWeatherError] = useState(false);

  return (
    <div id='App'>
      <MapLocationContainer
        location={location}
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
      <DisplayGithubLink />
    </div>
  );
};

export default App;
