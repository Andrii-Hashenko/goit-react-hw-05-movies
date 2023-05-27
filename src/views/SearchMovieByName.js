import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import FormBySearch from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import * as movieAPI from '../services/movies-api';

import { Horizontal } from '../views/MovieDetailsView/MovieDetailsView.styled';

export default function SearchMovieByName() {
  const [searchParams] = useSearchParams();

  const [searchMovie, setSearchMovie] = useState(
    searchParams.get('query') || ''
  );
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  console.log('search:', location);

  useEffect(() => {
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
    });
  }, [searchMovie]);

  const handleFormSubmit = searchMovie => {
    navigate(`/movies/?query=${searchMovie}`);
    setSearchMovie(searchMovie);
    setMovies([]);
  };
  return (
    <>
      <FormBySearch inSubmit={handleFormSubmit} searchMovie={searchMovie} />
      <Horizontal />
      {movies && (
        <ul>
          {movies.map(movie => (
            <NavLink to={`/movies/${movie.id}`} state={location} key={movie.id}>
              <p>{movie.title}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </>
  );
}
