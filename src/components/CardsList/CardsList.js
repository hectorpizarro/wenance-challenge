import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './CardsList.styles';
import { STATUS_IDLE } from '../../redux/people.slice';

export const InternalCardsList = ({
  isLoading,
  search,
  peopleList,
  error,
  isIdle
}) => {
  if (isIdle) {
    return null;
  }

  if (isLoading) {
    return <Styles.Message>Loading...</Styles.Message>;
  }

  if (error) {
    return <Styles.Message>Error detected: {error}</Styles.Message>;
  }

  if (peopleList.length === 0) {
    return (
      <Styles.Message>No people found, please search again.</Styles.Message>
    );
  }

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
};

InternalCardsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  peopleList: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isIdle: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  search: state.people.search,
  isIdle: state.people.status === STATUS_IDLE
});

const CardsList = connect(mapStateToProps)(InternalCardsList);

export default CardsList;
