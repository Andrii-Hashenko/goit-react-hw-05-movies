import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as moviesAPI from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeading';
import styled from 'styled-components';

const Gallery = styled.ul`
  display: grid;
  /* max-width: calc(100vw - 48px); */
  flex-basis: calc((100% - 8 * 15px) / 3);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  box-shadow: 0 0 10px 1px #30ebfc;
`;
const Title = styled.p`
  display: flex;
  /* font-size: 22px; */
  padding: 5px;
`;
export default function HomeView() {
  const location = useLocation();
  console.log('HomeView: ', location);
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    moviesAPI.GetTrending().then(response => setMovies(response.results));
  }, []);
  console.log(movies);
  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <Gallery>
          {movies.map(movie => (
            <li key={movie.id}>
              {}
              {}
              {}
              {}
              <Link to={`/movies/${movie.id}`} state={location}>
                <Card>
                  <img
                    src={`${viewPoster(movie.poster_path)}`}
                    alt={movie.title}
                    width="300"
                    height="450"
                  />
                  <Title>{movie.title}</Title>
                </Card>
              </Link>
            </li>
          ))}
        </Gallery>
      )}
    </>
  );
}
