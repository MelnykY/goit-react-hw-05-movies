import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../API/movieAPI';
import AboutMovie from '../components/AboutMovie/AboutMovie';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = location.state?.from ?? '/movies';
  const previousLocation = useRef(backLinkLocationRef);

  useEffect(() => {
    const abortController = new AbortController();

    getMovieDetails(abortController, id)
      .then(response => setMovie(response.data))
      .catch(error => {
        return error;
      });

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <>
      <GoBackBtn previousLocation={previousLocation} />

      {movie && <AboutMovie movie={movie} baseUrl={BASE_URL_IMG} />}
    </>
  );
};

export default MovieDetails;
