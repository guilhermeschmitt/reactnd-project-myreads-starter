import React, { Component } from 'react';
import SelectButton from './SelectButton';
import BookCover from './BookCover';
import { update } from '../../BooksAPI';

export default class Book extends Component {

  moveBook = async (event) => {
    const response = await update(this.props.book, event.target.value);
    this.props.updateList(response);
  }

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <BookCover
            cover={book.imageLinks && book.imageLinks.smallThumbnail}
          />
          <SelectButton
            shelf={book.shelf}
            move={this.moveBook}
          />
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    );
  }
}