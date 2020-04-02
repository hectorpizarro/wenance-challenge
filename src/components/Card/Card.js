/**
 * Card listed inside CardsList
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../shared/Button/Button';
import Styles from './Card.styles';
import { deletePeople } from '../../redux/people.slice';

// Basic component exported for test purposes
export const InternalCard = ({ people, onDelete }) => {
  // If Delete button is clicked process Redux action
  const handleDelete = () => onDelete({ name: people.name });

  // Card content styled using CSS Grid
  return (
    <Styles.Container>
      <Styles.Grid>
        <div className="name">{people.name}</div>
        <div className="heightLabel">Height:</div>
        <div className="heightValue">{people.height}</div>
        <div className="genderLabel">Gender:</div>
        <div className="genderValue">{people.gender}</div>
        <div className="button">
          <Button label="Delete" onClick={handleDelete} />
        </div>
      </Styles.Grid>
    </Styles.Container>
  );
};

InternalCard.propTypes = {
  // state.people.byId[id].records[n]
  people: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired,
  // Provided from Redux, deletes current record from state.people.byId[id].records
  onDelete: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onDelete: deletePeople
};

// Connect basic component to Redux store
const Card = connect(null, mapDispatchToProps)(InternalCard);

export default Card;
