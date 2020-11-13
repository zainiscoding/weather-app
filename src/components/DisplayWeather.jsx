import React from 'react';
import DisplayError from './DisplayError';

const DisplayWeather = (props) => {
  return (
    <>
      {props.weatherError === false && (
        <div id='display-weather-wrapper'>
          <button onClick={console.log(props.weather)}>WEATHER!</button>
          <button onClick={props.changeUnits}>°C/°F</button>
          <h1>Weather</h1>
          {props.weather === undefined && props.loadingIcon}
          {props.weather !== undefined && (
            <>
              <div id='display-weather-wrapper__degrees-wrapper'>
                {props.location.city !== undefined && (
                  <h2>
                    It's {props.weather.main.temp}° in {props.location.city}.
                  </h2>
                )}
                {props.location.city === undefined && (
                  <h2>
                    It's {props.weather.main.temp}° in {props.weather.name}.
                  </h2>
                )}
              </div>
              <div id='display-weather-wrapper__details-wrapper'>
                <div id='display-weather-wrapper__icon-description-wrapper'>
                  <img src={props.weatherIcon} alt='current weather icon' />
                  <p>{props.weatherDescription}</p>
                </div>
                <div id='details-wrapper__details-box'>
                  <div className='detail'>
                    <p className='detail__text'>
                      Feels like: {props.weather.main.feels_like}°
                    </p>
                  </div>
                  <div className='detail'>
                    <p className='detail__text'>
                      Max: {props.weather.main.temp_max}°
                    </p>
                  </div>
                  <div className='detail'>
                    <p className='detail__text'>
                      Min: {props.weather.main.temp_min}°
                    </p>
                  </div>
                  <div className='detail'>
                    <p className='detail__text'>
                      Humidity: {props.weather.main.humidity}%
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      {props.weatherError === true && <DisplayError />}
    </>
  );
};

export default DisplayWeather;
