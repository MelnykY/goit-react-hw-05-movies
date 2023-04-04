import { useForm } from 'react-hook-form';
import { Form, Input, Button } from './SearchMovies.styled';
import PropTypes from 'prop-types';

const SearchMovies = ({ handleSub }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ name }) => {
    if (!name.trim()) {
      return;
    }

    handleSub(name);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input defaultValue={''} {...register('name')} />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = {
  handleSub: PropTypes.func.isRequired,
};

export default SearchMovies;
