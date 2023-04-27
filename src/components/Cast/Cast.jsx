import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../API/movieAPI';
import { Container } from './Cast.styled';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
  const [state, setState] = useState([]);
  const [load, setload] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    setload(true);
    getMovieCredits(abortController, id)
      .then(response => {
        setState(response.data.cast);
        setload(true);
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
  }, [id]);

  return (
    <Container>
      {load ? (
        <p>loading...</p>
      ) : (
        <ul>
          {state.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `${BASE_URL_IMG}${profile_path}`
                    : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                }
                alt={name}
                style={{ width: 100, height: 150 }}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Cast;
