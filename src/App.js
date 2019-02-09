import React from 'react'
import { Route } from 'react-router-dom'
import './style/App.css'
import BookList from './view/BookList';
import SearchBook from './view/SearchBook';
import { getAll, get } from './BooksAPI';

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: {
        read: [],
        wantToRead: [],
        currentlyReading: []
      }
    }
  }

  async componentDidMount() {
    const books = await getAll();
    books.map(book => (
      this.setState(prevState => ({
        books: {
          ...prevState.books,
          [book.shelf]: [...prevState.books[book.shelf], book]
        }
      }))
    ));
  }

  updateList = (el) => {
    for (let [key, value] of Object.entries(el)) {
      value.map(id => get(id).then(response => response));
      const results = value.map(async (id) => get(id));
      Promise.all(results)
        .then(books => this.updaStateRow(key, books));
    }
  }

  updaStateRow = (row, arr) =>
    this.setState(prevState => ({
      books: {
        ...prevState.books,
        [row]: arr
      }
    }))

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>
          (
            <BookList
              books={this.state.books}
              updateList={this.updateList}
            />
          )}
        />
        <Route exact path='/search' render={() =>
          (
            <SearchBook />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
