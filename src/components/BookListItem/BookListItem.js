import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BookListItem = ({
  title,
  authors,
  publisher,
  publishedDate,
  pageCount,
  rating,
  url,
}) => {
  return (
    <Fragment>
      <img src={url} alt="img" />
      <div>
        <h2>{title}</h2>
        <p>Authors:{authors}</p>
        <p>Publisher:{publisher}</p>
        <p>PublishedDate:{publishedDate}</p>
        <p>PageCount:{pageCount}</p>
        <p>Rating:{rating}</p>
      </div>
    </Fragment>
  );
};

BookListItem.defaultProps = {
  rating: 0,
  publisher: ' no publisher',
};

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(String).isRequired,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

export default BookListItem;
