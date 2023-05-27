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
  // обновляє стейт при кожному нажатии в инпуті
  const handleChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
    // console.log(setSearchMovie);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // при сабміті нашої форми визиваємо метод із АРР (хендлформсабмит), який сюди передався як проп
    // імя пропа може бути яке завгодно, я назвала інсабміт
    // проверяем, если в форму ничего не ввели, или там просто пробелі (метод трим)
    // то ми просто виходимо з цього метода і не самбітимо форму
    if (searchMovie.trim() === '') {
      toast.error('Please enter your query');
      return;
    }
    props.inSubmit(searchMovie);
    // очищаем стейт зразу після сабміта форми
    // setSearchImage('');
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
