import React, { useState } from 'react';
import MapLocationContainer from './components/MapLocationContainer';
import WeatherContainer from './components/WeatherContainer';

const App = () => {
  const [coordinates, setCoordinates] = useState({});
  return (
    <div className='App'>
      <WeatherContainer coordinates={coordinates} />
      <MapLocationContainer
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
    </div>
  );
};

export default App;
