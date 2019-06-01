import React, { Component, Fragment } from 'react';
import genres from './genres.json';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import Loader from './Loader/Loader';
import * as api from './services/api';

const mapper = books => {
  return books.map(book => {
    const { id } = book;
    const { title } = book.volumeInfo;
    const { authors } = book.volumeInfo;
    const { publisher } = book.volumeInfo;
    const { publishedDate } = book.volumeInfo;
    const { pageCount } = book.volumeInfo;
    const { rating } = book.volumeInfo;
    const url = book.volumeInfo.imageLinks.smallThumbnail;
    return {
      id,
      title,
      authors,
      publisher,
      publishedDate,
      pageCount,
      rating,
      url,
    };
  });
};

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchBook({ query: 'react', genre: 'computers' });
  }

  fetchBook = ({ query, genre }) => {
    this.setState({ isLoading: true });

    api
      .fetchBooks(query, genre)
      .then(({ data }) => {
        this.setState({ books: mapper(data.items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { books, isLoading, error } = this.state;

    return (
      <Fragment>
        <SearchForm genres={genres} onSubmit={this.fetchBook} />
        {error && <h1>{error.message}</h1>}
        {isLoading && <Loader />}
        {books.length > 0 && <BookList items={books} />}
      </Fragment>
    );
  }
}
