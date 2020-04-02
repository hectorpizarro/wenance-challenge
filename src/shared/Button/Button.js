/**
 * Button component used on Card, Paginator, SearchForm.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.styles';

const Button = ({ label, disabled, onClick }) => (
  <Styles.Button
    as={disabled ? Styles.ButtonDisabled : Styles.ButtonActive}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </Styles.Button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false
};

export default React.memo(Button);
