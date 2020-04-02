import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SearchForm.styles';
import Button from '../../shared/Button/Button';

// Provides search field and button
const SearchForm = ({
  disabled,
  searchTerm,
  handleSearch,
  handleSearchChange
}) => {
  return (
    <Styles.Container>
      <Styles.Input
        as={disabled ? Styles.InputDisabled : Styles.InputActive}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button label="Search" disabled={disabled} onClick={handleSearch} />
    </Styles.Container>
  );
};

SearchForm.propTypes = {
  // Input and button are disabled if TRUE
  disabled: PropTypes.bool,
  // Search string shown inside field
  searchTerm: PropTypes.string.isRequired,
  // Function to apply a new search
  handleSearch: PropTypes.func.isRequired,
  // Function to update search term on parent component
  handleSearchChange: PropTypes.func.isRequired
};

SearchForm.defaultProps = {
  disabled: false
};

export default SearchForm;
