import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Styles from './CardsList.styles';

const InternalCardsList = ({
  isLoading,
  search,
  peopleList,
  deletePeople,
  error
}) => {
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
          <Card key={people.name} people={people} onDelete={deletePeople} />
        ))}
      </Styles.Grid>
    </Styles.ListContainer>
  );
};

InternalCardsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  peopleList: PropTypes.array.isRequired,
  deletePeople: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  search: state.people.search
});

const CardsList = connect(mapStateToProps)(InternalCardsList);

export default CardsList;
