import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../API/movieAPI';
import { Container } from './Cast.styled';

const BASE_URL_IMG = 'https://cdn-icons-png.flaticon.com/512/25/25634.png';

const Cast = () => {
  const [state, setState] = useState([]);
  const [load, setload] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    getMovieCredits(abortController, id)
      .then(response => {
        setState(response.data.cast);
        setload(true);
      })
      .catch(error => {
        return error;
      });

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <Container>
      {!load ? (
        <p>loading...</p>
      ) : (
        <ul>
          {state.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <img
                src={`${BASE_URL_IMG}${profile_path}`}
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
