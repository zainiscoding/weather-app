const DisplayCitySearch = (props) => {
  return (
    <div id='city-search-wrapper'>
      <div id='city-search-wrapper__inputs-wrapper'>
        <div id='city-search-wrapper__inputs-wrapper__clearbox'>
          <input
            id='city-search-wrapper__search-bar'
            type='text'
            placeholder='Enter a city'
            onChange={props.checkForEmptyLocation}
          ></input>
          <button
            id='city-search-wrapper__search-button'
            onClick={props.getCoordinatesByCity}
            onMouseEnter={(e) =>
              (e.target.id = 'city-search-wrapper__search-button--color')
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCitySearch;
