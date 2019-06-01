import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <BookListItem {...item} />
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
