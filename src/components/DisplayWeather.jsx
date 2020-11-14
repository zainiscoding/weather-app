import DisplayError from './DisplayError';
import DisplayWeatherCurrent from './DisplayWeatherCurrent';
import DisplayWeatherDaily from './DisplayWeatherDaily';

const DisplayWeather = (props) => {
  return (
    <>
      {props.weatherError === true && <DisplayError />}
      {props.weatherError === false && (
        <div id='display-weather-wrapper'>
          {props.weather === undefined && props.loadingIcon}
          {props.weather !== undefined && (
            <>
              <DisplayWeatherCurrent
                weather={props.weather}
                weatherIcon={props.weatherIcon}
                city={props.location.city}
              />
              <DisplayWeatherDaily
                weather={props.weather}
                weatherIcon={props.weatherIcon}
                currentDay={props.currentDay}
              />
              <button
                id='display-weather-wrapper__change-units-button'
                onClick={props.changeUnits}
              >
                °C/°F
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default DisplayWeather;
