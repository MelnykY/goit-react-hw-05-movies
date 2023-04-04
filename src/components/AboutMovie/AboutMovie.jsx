import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieDescription,
  Container,
  Img,
  UserScore,
  Overview,
  Title,
} from './AboutMovie.styled';
import PropTypes from 'prop-types';

const AboutMovie = ({ movie, baseUrl }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movie;

  return (
    <MovieDescription>
      <Container>
        <Img
          src={`${baseUrl}${poster_path}`}
          alt={title}
          width="250px"
          height="350px"
        />
        <div>
          <h2>
            {title}({release_date.slice(0, 4)})
          </h2>
          <UserScore>User score: {Math.round(vote_average * 10)}%</UserScore>
          <h3>Overview</h3>
          <Overview>{overview}</Overview>
          <h4>Ganres</h4>
          {genres.map(({ name }) => name).join(' ')}
        </div>
      </Container>
      <Title>Additional information</Title>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading..</div>}>
        <Outlet />
      </Suspense>
    </MovieDescription>
  );
};

AboutMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default AboutMovie;
