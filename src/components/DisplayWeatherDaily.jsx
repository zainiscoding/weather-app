import React from 'react';
import { add } from 'date-fns';

const DisplayWeatherDaily = (props) => {
  return (
    <div id='display-weather-wrapper__daily-weather'>
      {props.weather.daily.map((day) => {
        return (
          <>
            <p>
              {add(props.currentDay, {
                days: props.weather.daily.indexOf(day),
              }).getMonth() + 1}
              /
              {add(props.currentDay, {
                days: props.weather.daily.indexOf(day),
              }).getDate() + 1}
            </p>
            <img
              src={
                'http://openweathermap.org/img/wn/' +
                day.weather[0].icon +
                '.png'
              }
              alt='Day weather icon'
            />
            <div id='daily-weather__details-box'>
              <div className='details-box__detail'>
                <p className='detail__text'>
                  {day.temp.max}° / {day.temp.min}°
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayWeatherDaily;
