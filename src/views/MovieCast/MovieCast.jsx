import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ButtonGoBack from '../../components/Button';
import * as moviesAPI from '../../services/movies-api';
import {
  CastGallery,
  Character,
  CharacterValue,
  CastName,
} from '../MovieCast/MovieCast.styled';
import { ImArrowUp } from 'react-icons/im';

export default function MoviesCast() {
  // const params = useParams();
  // console.log(params);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);
  useEffect(() => {
    moviesAPI.getCast(movieId).then(response => setCast(response.cast));
  }, [movieId]);
  // console.log(cast);
  const viewPoster = profile_path => {
    if (profile_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
      // 'NO POSTER';
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      // top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {cast && (
        <CastGallery>
          {cast.map(castOne => (
            <li key={castOne.id}>
              <img
                src={`${viewPoster(castOne.profile_path)}`}
                alt={castOne.name}
                width="240"
              />
              <CastName>{castOne.name}</CastName>
              <Character>
                {' '}
                Character:<CharacterValue>
                  {' '}
                  {castOne.character}{' '}
                </CharacterValue>{' '}
              </Character>
            </li>
          ))}
        </CastGallery>
      )}
      <ButtonGoBack
        // onClick={() => navigate('..')}
        onClick={scrollToTop}
        label={'GO UP'}
        arrow={<ImArrowUp fill="#2314f7" size="32" />}
        // state={location.state}
      />
    </>
  );
}
