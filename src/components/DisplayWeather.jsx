import React from 'react';
import DisplayError from './DisplayError';
import DisplayWeatherCurrent from './DisplayWeatherCurrent';
import DisplayWeatherDaily from './DisplayWeatherDaily';

const DisplayWeather = (props) => {
  return (
    <>
      {props.weatherError === false && (
        <div id='display-weather-wrapper'>
          {props.weather === undefined && props.loadingIcon}
          {props.weather !== undefined && (
            <>
              <button onClick={props.changeUnits}>°C/°F</button>
              <div id='display-weather-wrapper__degrees-wrapper'>
                {props.location.city !== 'undefined' && (
                  <h2>
                    It's {props.weather.current.temp}° in {props.location.city}.
                  </h2>
                )}
                {props.location.city === 'undefined' && (
                  <h2>It's {props.weather.current.temp}° in your city.</h2>
                )}
              </div>
              <DisplayWeatherCurrent
                weather={props.weather}
                weatherIcon={props.weatherIcon}
              />
              <DisplayWeatherDaily
                weather={props.weather}
                weatherIcon={props.weatherIcon}
                currentDay={props.currentDay}
                days={props.days}
                months={props.months}
              />
            </>
          )}
        </div>
      )}
      {props.weatherError === true && <DisplayError />}
    </>
  );
};

export default DisplayWeather;
