import React, { Component } from 'react'
import BookRow from './components/BookRow';
import AddButton from './components/AddButton';

export default class BookList extends Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookRow
              title="Currently Reading"
              books={this.props.books.currentlyReading}
            />
            <BookRow
              title="Want to Read"
              books={this.props.books.wantToRead}
            />
            <BookRow
              title="Read"
              books={this.props.books.read}
            />
          </div>
        </div>
        <AddButton
          className="open-search"
          link="/search"
          text="Add a book"
        />
      </div>
    )
  }
}