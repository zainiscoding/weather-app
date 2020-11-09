import React, { useEffect, useState, useRef } from 'react';
import WeatherContainer from './WeatherContainer';
import MapLocation from './MapLocation';

const MapLocationContainer = (props) => {
  const [coordinates, setCoordinates] = useState({});

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <WeatherContainer coordinates={coordinates} />
      <MapLocation coordinates={coordinates} />
    </>
  );
};

export default MapLocationContainer;
