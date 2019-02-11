import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './components/BookShelf';
import AddButton from './components/AddButton';

const BookList = ({ books, updateList }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {books.map((el, index) => (
          <BookShelf
            title={el.title}
            books={el.value}
            updateList={updateList}
            key={index}
          />
        ))}
      </div>
    </div>
    <AddButton
      link="/search"
      text="Add a book"
    />
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateList: PropTypes.func.isRequired
}

export default BookList;