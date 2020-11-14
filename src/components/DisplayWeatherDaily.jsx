import React from 'react';

const DisplayWeatherDaily = (props) => {
  return (
    <div id='display-weather-wrapper__daily-weather'>
      {props.weather.daily.map((day) => {
        return (
          <>
            <div id='daily-weather__icon-description-wrapper'>
              <p>
                {day.weather[0].description.charAt(0).toUpperCase() +
                  day.weather[0].description.slice(1)}
              </p>
            </div>
            <div id='daily-weather__details-box'>
              <div className='details-box__detail'>
                <p className='detail__text'>
                  Feels like: {day.feels_like.day}°
                </p>
              </div>
              <div className='details-box__detail'>
                <p className='detail__text'>Min: {day.temp.min}°</p>
              </div>
              <div className='details-box__detail'>
                <p className='detail__text'>Max: {day.temp.max}°</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayWeatherDaily;
