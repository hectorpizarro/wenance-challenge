import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Styles from './SearchForm.styles';
import Button from '../../shared/Button/Button';
import { fetchPeople, STATUS_LOADING } from '../../redux/people.slice';

// Provides search field and button
export const InternalSearchForm = ({ disabled, search, handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = () => {
    const newSearch = searchValue.trim().toLowerCase();
    handleSearch(newSearch);
  };

  useEffect(() => {
    handleSearch(searchValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

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

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalSearchForm);

export default SearchForm;
