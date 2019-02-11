import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const AddButton = ({ link, className, text }) => (
      <Link to={link}>
        <div className={className}>
          <button>
            {text}
          </button>
        </div>
      </Link>
);

AddButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

AddButton.defaultProps = {
  link: '/',
  className: 'open-search'
};

export default AddButton;