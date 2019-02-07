import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './style/App.css'
import BookList from './view/BookList';
import SearchBook from './view/SearchBook';
import { getAll } from './BooksAPI';

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

  componentDidMount() {
    getAll().then(response => {
      response.map(el => {
        this.state.books[el.shelf].push(this.createBook(el));
        return this.setState(prevState => ({
          books: { ...prevState.books }
        }))
      })
    });
  }

  createBook = el => ({
    title: el.title,
    authors: el.authors.join(", "),
    cover: el.imageLinks.smallThumbnail,
    shelf: el.shelf
  })

  //TODO: MR-01 É pra componentizar as coisas, criar rotas também
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>
          (
            <BookList
              books={this.state.books}
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
