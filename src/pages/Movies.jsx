import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../API/movieAPI';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import ListMovies from 'components/ListMovies/ListMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (!searchQuery) return;

    const abortController = new AbortController();

    getSearchMovies(abortController, searchQuery)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        return error;
      });

    return () => {
      abortController.abort();
    };
  }, [searchQuery]);

  const handleSubmit = name => {
    setsearchParams({ searchQuery: name });
  };

  return (
    <>
      <SearchMovies handleSub={handleSubmit} />
      {movies && <ListMovies listMovies={movies} />}
    </>
  );
};

export default Movies;
