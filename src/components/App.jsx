import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/Appbar';
import Container from './Container/Container';
import Loader from './Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      {}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="movies" element={<MoviesView />}>
            <Route index element={<SearchMovieByName />}></Route>
            {}
            <Route path=":movieId" element={<MovieDetailsView />}>
              {}
              <Route path="cast" element={<MoviesCast />}></Route>
              <Route path="reviews" element={<MoviesReviews />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </Suspense>
      {}
    </Container>
  );
};
