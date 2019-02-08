import React, { Component } from 'react'
import SearchBookBar from './components/SearchBookBar'
import { search } from '../BooksAPI';
import BookRow from './components/BookRow';

export default class SearchBook extends Component {

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */

  //TODO: Talvez books grid seja um componente

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
    //FIXME: MElhor jeito mesmo?
    if(!response.error) {
      this.setState({ books: response })
    } else {
      this.setState({books: []})
    }
  }


  render() {
    return (
      <div className="search-books">
        <SearchBookBar
          link="/"
          onChangeteste={this.handleChange}
          query={this.state.query}
        />
        <div className="search-books-results">
          <ol className="books-grid">
            <BookRow
              title="TESTE"
              books={this.state.books}
            />
          </ol>
        </div>
      </div>
    );
  }
}