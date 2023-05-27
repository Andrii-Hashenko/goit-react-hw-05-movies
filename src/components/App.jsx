import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/Appbar';
import Container from './Container/Container';
import Loader from './Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import HomeView from '../views/HomeView';
// import SearchMovieByName from '../views/SearchMovieByName';
// import MovieDetailsView from '../views/MovieDetailsView';
// import MoviesView from '../views/MoviesView';
// import MoviesCast from '../views/MovieCast/MovieCast';
// import MoviesReviews from '../views/MoviesReviews';
// import NotFoundView from '../views/NotFoundView';

const HomeView = lazy(() => import('../views/HomeView'));
const MoviesView = lazy(() => import('../views/MoviesView'));
const SearchMovieByName = lazy(() => import('../views/SearchMovieByName'));
const MovieDetailsView = lazy(() =>
  import('../views/MovieDetailsView/MovieDetailsView')
);
const MoviesCast = lazy(() => import('../views/MovieCast'));
const MoviesReviews = lazy(() =>
  import('../views/MoviesReviews/MoviesReviews')
);
const NotFoundView = lazy(() => import('../views/NotFoundView'));

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
      {/* <Suspense fallback="<h1>Завантажуємо...</h1>"> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="movies" element={<MoviesView />}>
            <Route index element={<SearchMovieByName />}></Route>
            {/* сюди рендерим компонент, який відповідає за показування одного лише фільму */}
            <Route path=":movieId" element={<MovieDetailsView />}>
              {/* вложені елементи, що рендяряться внизу на тій же сторінці що і карточка фільму,  */}
              <Route path="cast" element={<MoviesCast />}></Route>
              <Route path="reviews" element={<MoviesReviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
      {/* </Suspense> */}
    </Container>
  );
};
