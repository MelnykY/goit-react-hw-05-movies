import PropTypes from 'prop-types';
import { Button, Wrapper } from './GoBackBtn.styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const GoBackBtn = ({ previousLocation: { current } }) => {
  return (
    <Button to={current}>
      <Wrapper>
        <MdOutlineArrowBackIosNew /> Go back
      </Wrapper>
    </Button>
  );
};

GoBackBtn.propTypes = {
  previousLocation: PropTypes.object.isRequired,
};

export default GoBackBtn;
