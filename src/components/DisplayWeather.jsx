import React from 'react';

const Weather = (props) => {
  return (
    <div id='weatherWrapper'>
      <button onClick={props.getWeather}>WEATHER!</button>
      <h2>weather</h2>
      {props.weather === undefined && <p>Loading...</p>}
      {props.weather !== undefined && <p>{JSON.stringify(props.weather)}</p>}
    </div>
  );
};

export default Weather;
