import { LoadBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore, children }) => {
  return (
    <LoadBtn type="button" onClick={onLoadMore}>
      {children}
    </LoadBtn>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  children: PropTypes.string,
};
