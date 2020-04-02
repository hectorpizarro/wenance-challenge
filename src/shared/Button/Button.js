import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.styles';

const Button = ({ label, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <Styles.Button
      as={disabled ? Styles.ButtonDisabled : Styles.ButtonActive}
      type="button"
      onClick={handleClick}
    >
      {label}
    </Styles.Button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false
};

export default Button;
