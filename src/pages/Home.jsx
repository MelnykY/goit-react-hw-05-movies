import { useEffect, useState } from 'react';
import { getTrending } from '../API/movieAPI';
import ListMovies from 'components/ListMovies/ListMovies';

const Home = () => {
  const [stateMovies, setStateMovies] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    getTrending(abortController)
      .then(response => {
        setStateMovies(response.data.results);
      })
      .catch(error => {
        return error;
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {stateMovies && <ListMovies listMovies={stateMovies} />}
    </>
  );
};

export default Home;
