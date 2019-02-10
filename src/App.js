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
      read: [],
      wantToRead: [],
      currentlyReading: [],
      none: [],
      booksIds: []
    }
  }

  async componentDidMount() {
    const books = await getAll();
    books.map(book => this.setState(prevState => ({
      [book.shelf]: [...prevState[book.shelf], book],
      booksIds: [...prevState.booksIds, { shelf: book.shelf, id: book.id }]
    })))
  }

  //FIXME: Acho que aqui eu posso mudar o método de update, como eu sei que vou tratar direto dos livros daquele escopo, eu posso só percorrer os registros
  //FIXME: Além disso, quando eu atualizar, eu também tenho que atualizar o booksIds;
  updateList = (el) => {
    for (let [key, value] of Object.entries(el)) {
      value.map(id => get(id).then(response => response));
      const results = value.map(async (id) => get(id));
      Promise.all(results)
        .then(books => this.setState({ [key]: books }));
    }
  }

  setSearchBooks = books => {
    books.map(book => {
      const bookFound = this.state.booksIds.find(el => el.id === book.id);
      return bookFound ? book['shelf'] = bookFound.shelf : book['shelf'] = 'none';
    })
    this.setState({ none: books });
  }

  render() {
    return (
      <div className="app" >
        <Route exact path='/' render={() =>
          (
            <BookList
              books={[
                { title: 'Currently Reading', value: this.state.currentlyReading },
                { title: 'Want to Read', value: this.state.wantToRead },
                { title: 'Read', value: this.state.read }
              ]}
              updateList={this.updateList}
            />
          )}
        />
        <Route exact path='/search' render={() =>
          (
            <SearchBook
              books={this.state.none}
              setSearchBooks={this.setSearchBooks}
              updateList={this.updateList}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
