import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item } from './ListMovies.styled';

const ListMovies = ({ listMovies }) => {
  const location = useLocation();
  return (
    <List>
      {listMovies.map(({ id, title, name }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ?? name}
          </Link>
        </Item>
      ))}
    </List>
  );
};
ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default ListMovies;
