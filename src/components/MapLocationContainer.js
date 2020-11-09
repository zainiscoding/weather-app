import React, { useEffect } from 'react';
import DisplayMapLocation from './DisplayMapLocation';

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
      <DisplayMapLocation coordinates={props.coordinates} />
    </>
  );
};

export default MapLocationContainer;
