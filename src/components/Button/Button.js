//import PropTypes from 'prop-types';
import { ButtonClick } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <>
      <ButtonClick type="button" onClick={onClick}>
        Load more
      </ButtonClick>
    </>
  );
};

export default Button;
