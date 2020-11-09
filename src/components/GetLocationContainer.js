async function getLocation() {
  let coords = {};
  await navigator.geolocation.getCurrentPosition(function (position) {
    return (coords.latitude = position.coords.latitude);
  });
  await navigator.geolocation.getCurrentPosition(function (position) {
    return (coords.longitude = position.coords.longitude);
  });
}

export default getLocation;
