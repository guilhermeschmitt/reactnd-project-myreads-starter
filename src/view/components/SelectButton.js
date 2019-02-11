import React from 'react';
import PropTypes from 'prop-types';

const SelectButton = ({ shelf, move }) => (
  <div className="book-shelf-changer">
    <select
      value={shelf}
      onChange={move}
    >
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">
        Want to Read
      </option>
      <option value="read">
        Read
      </option>
      <option value="none">
        None
      </option>
    </select>
  </div>
);

SelectButton.propTypes = {
  shelf: PropTypes.string,
  move: PropTypes.func.isRequired
}

SelectButton.defaultProps = {
  shelf: 'none'
}

export default SelectButton;