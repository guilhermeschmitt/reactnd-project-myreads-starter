import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectButton from './SelectButton';
import BookCover from './BookCover';
import { update } from '../../BooksAPI';
import Notification from './Notification';

export default class Book extends Component {

  moveBook = async (event) => {
    try {
      const response = await update(this.props.book, event.target.value);
      Notification.addMessage('success', 'Livro atualizado com sucesso!');
      this.props.updateList(response);
    } catch (error) {
      Notification.addMessage('error', error.message);
    }
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

Book.propTypes = {
  book: PropTypes.object.isRequired
}