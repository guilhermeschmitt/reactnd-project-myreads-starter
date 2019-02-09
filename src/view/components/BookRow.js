import React, { Component } from 'react';
import Book from './Book';

export default class BookRow extends Component {

  //FIXME: Verificar um jeito melhor de fazer a validação se não é null
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  updateList={this.props.updateList}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}