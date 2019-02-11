import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({title, books, updateList}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {title}
    </h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, index) => (
          <li key={index}>
            <Book
              book={book}
              updateList={updateList}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

BookShelf.propTypes = { 
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateList: PropTypes.func.isRequired
}

export default BookShelf;