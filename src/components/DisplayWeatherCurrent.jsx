const DisplayWeatherCurrent = (props) => {
  return (
    <div id='display-weather-wrapper__current-weather'>
      <div id='display-weather-wrapper__degrees-wrapper'>
        {props.city !== 'undefined' && (
          <h2 id='current-temp-text'>
            It's {props.weather.current.temp}° in {props.city}.
          </h2>
        )}
        {props.city === 'undefined' && (
          <h2>It's {props.weather.current.temp}° in your city.</h2>
        )}
      </div>
      <div id='current-weather__icon-description-wrapper'>
        <img src={props.weatherIcon} alt='current weather icon' />
        <p>
          {props.weather.current.weather[0].description
            .charAt(0)
            .toUpperCase() +
            props.weather.current.weather[0].description.slice(1)}
        </p>
      </div>
      <div id='current-weather__details-box'>
        <div className='details-box__detail'>
          <p className='detail__text'>
            Feels like: {props.weather.current.feels_like}°
          </p>
        </div>
        <div className='details-box__detail'>
          <p className='detail__text'>
            Humidity: {props.weather.current.humidity}%
          </p>
        </div>
        <div className='details-box__detail'>
          <p className='detail__text'>UV Index: {props.weather.current.uvi}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherCurrent;
