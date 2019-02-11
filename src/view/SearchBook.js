import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import { search } from '../BooksAPI';
import BookShelf from './components/BookShelf';

export default class SearchBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      books: []
    }
  }

  handleChange = async (query) => {
    this.setState({ query });
    const response = await search(query);
    this.changeBooks(response);
  }

  changeBooks = found => {
    let books = undefined;
    if (found && !found.error) {
      books = this.props.setSearchBooks(found);
    } else {
      books = this.props.setSearchBooks([]);
    }
    this.setState({ books })
  }

  updateList = async (arr) => {
    await this.props.updateList(arr);
    const books = this.props.setSearchBooks(this.state.books);
    this.setState({ books })
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          link="/"
          onChangeQuery={this.handleChange}
          query={this.state.query}
        />
        <div className="search-books-results">
          <BookShelf
            title="Result:"
            books={this.state.books}
            updateList={this.updateList}
          />
        </div>
      </div>
    );
  }
}