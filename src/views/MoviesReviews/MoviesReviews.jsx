import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonGoBack from '../../components/Button';
import * as moviesAPI from '../../services/movies-api';
import {
  AuthorName,
  Review,
  AuthorNameValue,
} from '../MoviesReviews/MoviesReviews.styled';
import { ImArrowUp } from 'react-icons/im';

export default function MoviesReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,

      behavior: 'smooth',
    });
  };
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <AuthorName>
                Author: <AuthorNameValue> {review.author} </AuthorNameValue>
              </AuthorName>
              <Review>{review.content}</Review>
            </li>
          ))}
          {}
          <ButtonGoBack
            onClick={scrollToTop}
            label={'GO UP'}
            arrow={<ImArrowUp fill="#2314f7" size="32" />}
          />
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
