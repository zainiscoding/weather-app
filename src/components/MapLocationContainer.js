import React, { useEffect } from 'react';
import MapLocation from './MapLocation';

const MapLocationContainer = (props) => {
  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return props.setCoordinates({
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
      <MapLocation coordinates={props.coordinates} />
    </>
  );
};

export default MapLocationContainer;
