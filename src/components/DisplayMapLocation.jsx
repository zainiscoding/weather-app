import React from 'react';

const MapLocation = (props) => {
  return (
    <div id='Coords'>
      <p>{props.coordinates.latitude}</p>
      <p>{props.coordinates.longitude}</p>
    </div>
  );
};

export default MapLocation;
