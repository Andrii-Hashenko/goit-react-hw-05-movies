import { useState, useEffect } from 'react';
import {
  // NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import ButtonGoBack from '../../components/Button';
import * as movieAPI from '../../services/movies-api';
// import styled from 'styled-components';
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
  // щоб отримати айдішнік одного фільму викоритовуємо хук - юз парамс
  // const params = useParams();
  // console.log(params);
  // повертає нам обєкт динамічних параметрів
  //беремо диструктуризуємо з парамс фільмайді
  const { movieId } = useParams();
  // ми ще раз робимо хттп запит, тому що якщо користувач просто заходить по ссилці на сторінку одного фільму, то у нас не рендерилися попередні список фільмфі, де був запит на бекенд, і ніякої відповіді від бекенду немає.
  // ще раз - це якщо користувач відразу ввів адресу одного фільму
  // обявляємо стейт для одного фільму і роблю юзефект фетч по муві айді і потім записую це в сетмуві
  const [movie, setMovie] = useState(null);
  // console.log(movie);
  const navigate = useNavigate();
  // console.log(navigate);
  const location = useLocation();
  const locationState = location.state;
  const locationStateSearch = location.search;
  console.log(locationStateSearch);
  // const prevLocation = location.state.pathname;
  console.log('MovieDetailsView: ', locationState);

  useEffect(() => {
    movieAPI.getMoviesById(movieId).then(response => setMovie(response));
  }, [movieId]);
  // функція що перевіряє чи є постер до фільму
  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
      // 'NO POSTER';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };
  // функція для переводу оцінки користувача в %
  const userScore = vote_average => {
    return vote_average * 10 + '%';
  };
  // тут перебираємо масив із жанрами через кому і пробел
  const allGenres = genres => {
    if (genres === null) {
      return;
    }
    return genres.map(genre => genre.name).join(', ');
  };

  const onButtonGoBackClick = () => {
    // перевіряємо , чи є стейт?
    // якщо є, то переходимо за адресою з паснейм (звізки ми прийшли на цю сторінку)+ що було в рядку пошукуЖ
    // (якщо там нічого не було, то просто повернемося на попередню сторінку, якщо в  стейті пошуку щось було - повернемося на сторінку пошуку
    // якщо стейт нул - тобто ми просто відкрили карту фільма за посиланням, наприклад з гуглу, то
    // переходимо на нашу початкову сторінку.
    location.state
      ? navigate(location.state.pathname + location.state.search)
      : navigate('/');
  };
  return (
    <>
      {/* <ButtonGoBack /> */}
      <Horizontal />
      {/* тут використовуємо динамічний параметр взятий з юзпарамс */}
      {/* якщо прийшда відповідь з бекенду(є фільми) ми можемо щось зарендерить, вибираємо з обєкта що нам потрібно (або це може бути окремий компонент типу карточка фільм кард) */}
      {movie && (
        <>
          {/* <ButtonGoBack onClick={() => navigate(prevLocation)} /> */}
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
                {/* інший варіант через редьюс - перший аргумент функціі колбек, що приймає акк і текуще значення, 
                      і другий аргумент редьюса - пуста строчка, куди буде записуватись значення і між ними пробел */}
                {/* {movie.genres.reduce(
              (acc, currrent) => acc + ' ' + currrent.name,
              ''
            )} */}
                {/* <Horizontal /> */}
              </p>
            </MovieInfo>
          </CardMovie>
          <Horizontal />
          <Titleh2> Additional information </Titleh2>
          <LinkElem to={`/movies/${movie.id}/cast`} state={location.state}>
            {/* <PageHeading text="Cast" /> */}
            Cast
          </LinkElem>
          <LinkElem to={`/movies/${movie.id}/reviews`} state={location.state}>
            {/* <PageHeading text="Reviews" /> */}
            Reviews
          </LinkElem>

          {/* тут будуть рендериться відповідні інфо без перезагрузки сторінки */}
          <Outlet />
        </>
      )}
    </>
  );
}
