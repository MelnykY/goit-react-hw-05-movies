import { useEffect, useState } from 'react';
import { getTrending } from '../API/movieAPI';
import ListMovies from 'components/ListMovies/ListMovies';

const Home = () => {
  const [stateMovies, setStateMovies] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setload(true);
    getTrending(abortController)
      .then(response => {
        setStateMovies(response.data.results);
      })
      .catch(error => {
        return error;
      })
      .finally(() => {
        setload(false);
      });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      {load ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>Trending today</h1>
          {stateMovies && <ListMovies listMovies={stateMovies} />}
        </>
      )}
      ;
    </>
  );
};

export default Home;
