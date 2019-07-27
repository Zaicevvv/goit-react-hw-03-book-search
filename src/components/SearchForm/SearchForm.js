import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = { query: '', genre: '' };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSelect = option => {
    this.setState({ genre: option });
  };

  handleSubmit = e => {
    e.preventDefault();

    // const { query, genre } = this.state;

    this.props.onSubmit({ ...this.state });
    this.setState({ query: '' });
  };

  render() {
    const { query, genre } = this.state;
    const { genres } = this.props;
    return (
      <form>
        <input value={query} onChange={this.handleChange} />
        <Select
          options={genres}
          placeholder="Select genre..."
          onChange={this.handleSelect}
          value={genre}
        />
        <button type="button" onClick={this.handleSubmit}>
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  genres: PropTypes.arrayOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
