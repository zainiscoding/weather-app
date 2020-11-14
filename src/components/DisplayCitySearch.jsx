import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

const DisplayCitySearch = (props) => {
  return (
    <div id='city-search-wrapper'>
      <div id='city-search-wrapper__inputs-wrapper'>
        <input
          id='city-search-wrapper__search-bar'
          type='text'
          placeholder='Enter a city'
          onChange={props.checkForEmptyLocation}
        ></input>
        <FontAwesomeIcon
          icon={faSearchLocation}
          size='3x'
          id='city-search-wrapper__search-button'
          onClick={props.getCoordinatesByCity}
        />
      </div>
    </div>
  );
};

export default DisplayCitySearch;
