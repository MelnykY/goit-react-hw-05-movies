import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
      <>
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        colors={['#24045a', '#600fe2', '#945eeb', '#c2abe9', '#f1f1f1']}
          />
      </>
  );
};

export default Loader;
