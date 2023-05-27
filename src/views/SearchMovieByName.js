import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import FormBySearch from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import * as movieAPI from '../services/movies-api';
// import styled from 'styled-components';
import { Horizontal } from '../views/MovieDetailsView/MovieDetailsView.styled';

export default function SearchMovieByName() {
  const [searchParams] = useSearchParams();
  // повертає параметри адресного рядка, нам потрібно значення квері -
  // вибираємо квері з серчпарамса і записуємо його юз стейт
  // якщо квері немає, то серчпарамс повертає нул, тому робимо перевірку - або є квері, або там пустий рядок
  // передаємо це значення в початковий стейт серчМуві
  const [searchMovie, setSearchMovie] = useState(
    searchParams.get('query') || ''
  );
  const [movies, setMovies] = useState([]);
  // const search = useSearchParams();
  // URLSearchParams.get();
  // console.log(search);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('search:', location);
  // console.log(movies);
  useEffect(() => {
    // якщо рядок пустий (або щось фолс), то не робимо запит і просто виходимо з юзєфекта
    if (!searchMovie) {
      return;
    }
    movieAPI.getMovieBySearch(searchMovie).then(response => {
      if (response.results.length === 0) {
        return toast.info(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
      setMovies(response.results);
      // console.log(movie);
    });
  }, [searchMovie]);

  const handleFormSubmit = searchMovie => {
    // console.log(searchMovie);
    // дописали в адресному рядку квері із значенням пошуку
    navigate(`/movies/?query=${searchMovie}`);
    setSearchMovie(searchMovie);
    setMovies([]);
    // console.log(movies);
  };
  return (
    <>
      <FormBySearch inSubmit={handleFormSubmit} searchMovie={searchMovie} />
      <Horizontal />
      {movies && (
        <ul>
          {movies.map(movie => (
            <NavLink
              // to={`/movies/?query=${searchMovie}`}
              to={`/movies/${movie.id}`}
              state={location}
              key={movie.id}
            >
              <p>{movie.title}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
}
