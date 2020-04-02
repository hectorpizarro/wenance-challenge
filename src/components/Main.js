import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm/SearchForm';
import CardsList from './CardsList/CardsList';
import Paginator from './Paginator/Paginator';
import Styles from './Main.styles';
import { STATUS_LOADING, peoplePageSelector } from '../redux/people.slice';

export const InternalMain = ({ isLoading, page, peoplePage, error }) => {
  const noop = () => {};

  const handlePrevious = () => {
    console.log('handle previous');
  };

  const handleNext = () => {
    console.log('handle next');
  };

  return (
    <Styles.Container>
      <h2>Wenance Challenge - Star Wars People</h2>
      <Styles.TopRow>
        <SearchForm />
        <Paginator
          page={page}
          count={peoplePage.count}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </Styles.TopRow>
      <CardsList
        isLoading={isLoading}
        peopleList={peoplePage.records}
        error={error}
        deletePeople={noop}
      />
    </Styles.Container>
  );
};

InternalMain.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  peoplePage: PropTypes.shape({
    count: PropTypes.number,
    records: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.people.status === STATUS_LOADING,
  page: state.people.page,
  peoplePage: peoplePageSelector(state.people),
  error: state.people.error
});

const mapDispatchToProps = {};

const Main = connect(mapStateToProps, mapDispatchToProps)(InternalMain);

export default Main;
