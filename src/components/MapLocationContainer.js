import React, { useEffect } from 'react';
import DisplayCitySearch from './DisplayCitySearch';

const MapLocationContainer = (props) => {
  //Get the current coordinates and update the state
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      return props.setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  //Set the state to city instead of coordinates
  function setCity(e) {
    if (e.target.previousSibling.value.length > 0) {
      return props.setLocation({
        city: e.target.previousSibling.value,
      });
    }
  }

  //If input is empty, switch to coordinates
  function checkForEmptyLocation(e) {
    if (e.target.value.length === 0) {
      getCurrentLocation();
    }
  }

  //Get coordinates on first load
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <DisplayCitySearch
        location={props.location}
        setCity={setCity}
        checkForEmptyLocation={checkForEmptyLocation}
      />
    </>
  );
};

export default MapLocationContainer;
