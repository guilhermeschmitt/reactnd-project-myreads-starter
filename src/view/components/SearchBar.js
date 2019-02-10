import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {
  
  //FIXME: Verifica porque tem que ter esse handlechange aqui
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