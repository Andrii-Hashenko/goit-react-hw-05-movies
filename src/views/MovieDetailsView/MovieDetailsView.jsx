import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import ButtonGoBack from '../../components/Button';
import * as movieAPI from '../../services/movies-api';

import {
  CardMovie,
  MovieInfo,
  Horizontal,
  LinkElem,
  Titleh2,
  Titleh3,
} from '../MovieDetailsView/MovieDetailsView.styled';
import { ImArrowLeft } from 'react-icons/im';

export default function MovieDetailsView() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state;
  const locationStateSearch = location.search;
  console.log(locationStateSearch);

  console.log('MovieDetailsView: ', locationState);

  useEffect(() => {
    movieAPI.getMoviesById(movieId).then(response => setMovie(response));
  }, [movieId]);

  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  const userScore = vote_average => {
    return vote_average * 10 + '%';
  };

  const allGenres = genres => {
    if (genres === null) {
      return;
    }
    return genres.map(genre => genre.name).join(', ');
  };

  const onButtonGoBackClick = () => {
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };
  return (
    <>
      {}
      <Horizontal />
      {}
      {}
      {movie && (
        <>
          {}
          <ButtonGoBack
            onClick={onButtonGoBackClick}
            label={'GO BACK'}
            arrow={<ImArrowLeft fill="#2314f7" size="32" />}
          />
          <PageHeading text={`${movie.title}`} />
          <Horizontal />
          <CardMovie>
            <img
              src={`${viewPoster(movie.poster_path)}`}
              alt={movie.title}
              width="240"
            />
            <MovieInfo>
              <Titleh2> {movie.title} </Titleh2>
              <Titleh3> Overview: </Titleh3>
              <p> {movie.overview} </p>
              <p> User score: {`${userScore(movie.vote_average)}`} </p>
              <Titleh3> Genres: </Titleh3>
              <p>
                {`${allGenres(movie.genres)}`}
                {}
                {}
                {}
              </p>
            </MovieInfo>
          </CardMovie>
          <Horizontal />
          <Titleh2> Additional information </Titleh2>
          <LinkElem to={`/movies/${movie.id}/cast`} state={location.state}>
            {}
            Cast
          </LinkElem>
          <LinkElem to={`/movies/${movie.id}/reviews`} state={location.state}>
            {}
            Reviews
          </LinkElem>

          {}
          <Outlet />
        </>
      )}
    </>
  );
}
