/**
 * Component shows current search term used for list and Card components listed
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './CardsList.styles';
import {
  STATUS_IDLE,
  STATUS_LOADING,
  STATUS_LOADED
} from '../../redux/people.slice';

// Basic component exported for test purposes
export const InternalCardsList = ({ status, search, error, peopleList }) => {
  switch (status) {
    case STATUS_IDLE:
      // Component mounted, wait for API request to show anything
      return null;
    case STATUS_LOADING:
      // API request in progress, show loading
      return <Styles.Message>Loading...</Styles.Message>;
    case STATUS_LOADED: {
      // If response defined error message show it
      if (error) {
        return <Styles.Message>Error detected: {error}</Styles.Message>;
      }
      // If response is empty array show message
      if (peopleList.length === 0) {
        return (
          <Styles.Message>No people found, please search again.</Styles.Message>
        );
      }
      // Show Cards list with response array
      return (
        <Styles.ListContainer>
          <div>Search term: &quot;{search}&quot;</div>
          <Styles.Grid>
            {peopleList.map(people => (
              <Card key={people.name} people={people} />
            ))}
          </Styles.Grid>
        </Styles.ListContainer>
      );
    }
    default:
      return null; // Unknown status
  }
};

InternalCardsList.propTypes = {
  // slice status
  status: PropTypes.oneOf([STATUS_LOADING, STATUS_LOADED, STATUS_IDLE])
    .isRequired,
  // From Redux slice, search term used on API request
  search: PropTypes.string.isRequired,
  // Data error to show
  error: PropTypes.string.isRequired,
  // Data list to show
  peopleList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  status: state.people.status,
  search: state.people.search,
  error: state.people.error
});

// Connect basic component to Redux store
const CardsList = connect(mapStateToProps)(InternalCardsList);

export default CardsList;
