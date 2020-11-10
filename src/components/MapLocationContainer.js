import React, { useEffect } from 'react';
import DisplayCitySearch from './DisplayCitySearch';

const MapLocationContainer = (props) => {
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return props.setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  function setCity(e) {
    props.setLocation((prevState) => {
      prevState.city = e.target.previousSibling.textContent;
    });
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <DisplayCitySearch location={props.location} />
    </>
  );
};

export default MapLocationContainer;
