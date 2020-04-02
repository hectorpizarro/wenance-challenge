import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../shared/Button/Button';
import Styles from './Card.styles';
import { deletePeople } from '../../redux/people.slice';

export const InternalCard = ({ people, onDelete }) => {
  const handleDelete = () => onDelete({ name: people.name });

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
  people: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  onDelete: deletePeople
};

const Card = connect(null, mapDispatchToProps)(InternalCard);

export default Card;
