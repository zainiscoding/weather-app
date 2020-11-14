import { add } from 'date-fns';

const DisplayWeatherDaily = (props) => {
  return (
    <div id='display-weather-wrapper__daily-weather'>
      <h3 id='daily-weather__title'>8-day Forecast</h3>
      <div id='daily-weather__carousel'>
        <div id='carousel__daily-weather'>
          {props.weather.daily.map((day, index) => {
            return (
              <div className='display-weather-wrapper__day' key={index}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayWeatherDaily;
