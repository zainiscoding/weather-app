import React from 'react';

const Weather = (props) => {
  return (
    <div id='display-weather-wrapper'>
      <button onClick={console.log(props.weather)}>WEATHER!</button>
      <button onClick={props.changeUnits}>°C/°F</button>
      <h1>Weather</h1>
      {props.weather === undefined && <p>Loading...</p>}
      {props.weather !== undefined && (
        <>
          <h2>
            It's {props.weather.main.temp}° in {props.weather.name}.
          </h2>
          <p>{props.weather.name}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
