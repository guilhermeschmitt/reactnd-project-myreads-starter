import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import { search } from '../BooksAPI';
import BookRow from './components/BookRow';

//FIXME: Quando retornar para a página principal e depois voltar de novo para essa, encontrar a página limpa
export default class SearchBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }

  handleChange = async (query) => {
    this.setState({ query });
    const response = await search(query);
    if (response && !response.error) {
      this.props.setSearchBooks(response);
    } else {
      this.props.setSearchBooks([]);
    }
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
          <BookRow
            title="Result:"
            books={this.props.books}
            updateList={this.props.updateList}
          />
        </div>
      </div>
    );
  }
}