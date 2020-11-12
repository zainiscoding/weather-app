import React from 'react';

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
              <h2>
                It's {props.weather.main.temp}° in {props.weather.name}.
              </h2>
              <div id='display-weather-wrapper__details-wrapper'>
                <div className='detail'>
                  <img src={props.weatherIcon} alt='current weather icon' />
                  <p>{props.weatherDescription}</p>
                </div>
              </div>
              <p>{props.weather.name}</p>
            </>
          )}
        </div>
      )}
      {props.weatherError === true && (
        <div id='display-weather-error-wrapper'>
          <h2>
            We're sorry, we can't seem to find the weather for your area. Please
            double check the city name.
          </h2>
        </div>
      )}
    </>
  );
};

export default DisplayWeather;
