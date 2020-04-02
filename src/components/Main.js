import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import CardsList from './CardsList/CardsList';

const Main = () => {
  // Manage search term on stage
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Searching ${searchTerm}`);
  };

  const handleSearchChange = event => {
    const newSearchTerm = event.currentTarget.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <SearchForm
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
      />
      <CardsList />
    </>
  );
};

Main.propTypes = {};

export default Main;
