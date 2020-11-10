import React from 'react';

const DisplayCitySearch = (props) => {
  return (
    <div id='city-search-wrapper'>
      <input
        id='city-search-wrapper__search-bar'
        type='text'
        placeholder='Enter a city'
        onChange={props.checkForEmptyLocation}
      ></input>
      <button id='city-search-wrapper__search-button' onClick={props.setCity}>
        Get weather
      </button>
    </div>
  );
};

export default DisplayCitySearch;
