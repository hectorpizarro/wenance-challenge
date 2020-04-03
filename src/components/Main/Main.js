/**
 * Main page
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../SearchForm/SearchForm';
import CardsList from '../CardsList/CardsList';
import Paginator from '../Paginator/Paginator';
import Styles from './Main.styles';
import { peoplePageSelector } from '../../redux/people.slice';

// Export basic component for testing purposes
export const InternalMain = ({ peoplePage }) => {
  return (
    <Styles.Container>
      <h2>Wenance Challenge</h2>
      <Styles.TopRow>
        <SearchForm />
        <Paginator count={peoplePage.count} />
      </Styles.TopRow>
      <CardsList peopleList={peoplePage.records} />
    </Styles.Container>
  );
};

InternalMain.propTypes = {
  // Data to show in current page
  peoplePage: PropTypes.shape({
    count: PropTypes.number.isRequired,
    records: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  peoplePage: peoplePageSelector(state.people)
});

// Connect basic component to Redux store
const Main = connect(mapStateToProps)(InternalMain);

export default Main;
