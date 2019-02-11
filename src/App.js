import React from 'react'
import { Route } from 'react-router-dom'
import './style/App.css'
import BookList from './view/BookList';
import SearchBook from './view/SearchBook';
import { getAll, get } from './BooksAPI';
import { ToastContainer } from 'react-toastify';

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      read: [],
      wantToRead: [],
      currentlyReading: [],
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

  /*
    Poderia ter feito dois métodos, um de adicionar livro em determinada estante e outro para remover.
    Porém, decidi fazer desta maneira para utilizar de todos os recursos fornecidos pela API. Eu sei
    que não é a forma mais eficaz de se fazer esse update, mas implementei assim por opção mesmo.
  */
  updateList = async (el) => {
    let arr = { booksIds: [] };

    for (let [key, value] of Object.entries(el)) {
      const promises = value.map(id => get(id));
      const books = await Promise.all(promises);
      arr['booksIds'] = [...arr['booksIds'], ...this.createBookId(books)];
      arr[key] = books;
    }

    this.setState({ ...arr });
  }

  createBookId = books => books.map(book => ({ shelf: book.shelf, id: book.id }));

  setSearchBooks = books => books.map(book => {
    let bookFound = this.state.booksIds.find(el => el.id === book.id);
    bookFound ? book['shelf'] = bookFound.shelf : book['shelf'] = 'none';
    return book;
  });

  render() {
    return (
      <React.Fragment>
        <ToastContainer newestOnTop />
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
                setSearchBooks={this.setSearchBooks}
                updateList={this.updateList}
              />
            )}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default BooksApp