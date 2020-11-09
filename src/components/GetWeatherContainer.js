let coords = {};
async function getWeather(location) {
  if (location === null) {
    try {
      const response = await fetch(
        '//api.openweathermap.org/data/2.5/weather?lat=' +
          coords.latitude +
          '&lon=' +
          coords.longitude +
          '&appid=7c96ea14ab892a5bb3382ee2bb277434',
        { mode: 'cors' }
      );
      // console.log(response);
      const weatherData = await response.json();
      const weatherDataMain = weatherData.main;
      return weatherDataMain;
    } catch (err) {
      console.log(err);
    }
  }
}

export default getWeather;
