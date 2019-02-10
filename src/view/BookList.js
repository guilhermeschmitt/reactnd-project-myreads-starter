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
            {this.props.books.map((el, index) => (
              <BookRow
                title={el.title}
                books={el.value}
                updateList={this.props.updateList}
                key={index}
              />
            ))}
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