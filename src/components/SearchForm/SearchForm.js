/**
 * Show Input and button to set search term on API requests.
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './SearchForm.styles';
import Button from '../../shared/Button/Button';
import { fetchPeople, STATUS_LOADING } from '../../redux/people.slice';

// Export basic component for test purposes
export const InternalSearchForm = ({ disabled, search, handleSearch }) => {
  // User can change the input value locally. This value will be stored on the Redux slice only when user clicks the button.
  const [searchValue, setSearchValue] = useState('');

  /**
   * Send state input value to slice action. Value will be stored on Redux slice and async function will send an API request.
   */
  const onSearch = () => {
    const newSearch = searchValue.trim().toLowerCase();
    handleSearch(newSearch);
  };

  // Called when component is mounted, calls the first API request with empty search term
  useEffect(() => {
    handleSearch(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Update local state if Redux slice updates search
   */
  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  /**
   * Update local state everytime the input changes value
   * @param {Object} event - Change input event
   */
  const handleChange = event => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <Styles.Container>
      <Styles.Input
        as={disabled ? Styles.InputDisabled : Styles.InputActive}
        type="text"
        value={searchValue}
        onChange={handleChange}
        maxlength="5"
        placeholder="Enter name"
        disabled={disabled}
      />
      <Button label="Search" disabled={disabled} onClick={onSearch} />
    </Styles.Container>
  );
};

InternalSearchForm.propTypes = {
  // Input and button are disabled if TRUE
  disabled: PropTypes.bool.isRequired,
  // Search string shown inside field
  search: PropTypes.string.isRequired,
  // Function to apply a new search
  handleSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  disabled: state.people.status === STATUS_LOADING,
  search: state.people.search
});

const mapDispatchToProps = {
  handleSearch: fetchPeople
};

// Connect basic component to Redux store
const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalSearchForm);

export default SearchForm;
