import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './Searchbar.styled.js';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export default function FormBySearch(props) {
  const [searchMovie, setSearchMovie] = useState(props.searchMovie);

  const handleChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchMovie.trim() === '') {
      toast.error('Please enter your query');
      return;
    }
    props.inSubmit(searchMovie);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchMovie}
        onChange={handleChange}
      />
    </SearchForm>
  );
}

FormBySearch.propTypes = {
  searchMovie: PropTypes.string,
  inSubmit: PropTypes.func,
};
