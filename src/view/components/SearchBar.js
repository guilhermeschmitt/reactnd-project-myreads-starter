import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  
  handleChange = (event) => this.props.onChangeQuery(event.target.value);

  render() {
    return (
      <div className="search-books-bar">
        <Link
          to={this.props.link}
        >
          <button className="close-search">
            Close
          </button>
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  link: PropTypes.string,
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func
}

SearchBar.defaultProps = {
  link: '/',
  handleChange: () => alert('//TODO')
}