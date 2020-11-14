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

  //Find the coordinates of a city and set the location to that city
  async function getCoordinatesByCity(e) {
    props.setWeather();
    try {
      const response = await fetch(
        `https://geocode.xyz/${e.target.previousSibling.value}?json=1`,
        { mode: 'cors' }
      );
      const responseData = await response.json();
      if (responseData.matches === null) {
        throw props.setWeatherError(true);
      } else {
        props.setLocation({
          latitude: responseData.latt,
          longitude: responseData.longt,
          city: responseData.standard.city,
        });
      }
    } catch (err) {
      console.log(err);
      props.setWeatherError(true);
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
        getCoordinatesByCity={getCoordinatesByCity}
        checkForEmptyLocation={checkForEmptyLocation}
      />
    </>
  );
};

export default MapLocationContainer;
