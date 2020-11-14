import React from 'react';

const DisplayWeatherCurrent = (props) => {
  return (
    <div id='display-weather-wrapper__details-wrapper'>
      <div id='display-weather-wrapper__icon-description-wrapper'>
        <img src={props.weatherIcon} alt='current weather icon' />
        <p>{props.weatherDescription}</p>
      </div>
      <div id='details-wrapper__details-box'>
        <div className='detail'>
          <p className='detail__text'>
            Feels like: {props.weather.current.feels_like}°
          </p>
        </div>
        <div className='detail'>
          <p className='detail__text'>
            Humidity: {props.weather.current.humidity}%
          </p>
        </div>
        <div className='detail'>
          <p className='detail__text'>UV Index: {props.weather.current.uvi}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherCurrent;
