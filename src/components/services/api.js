import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const fetchBooks = (query, subject) =>
  axios.get(`${BASE_URL}${query}+subject:${subject}`);

export default fetchBooks;
