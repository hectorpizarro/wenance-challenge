import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/Button';
import Styles from './Card.styles';

const Card = ({ people, onDelete }) => {
  const handleDelete = () => onDelete(people.name);

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

Card.propTypes = {
  people: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    gender: PropTypes.string
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Card;

/*
{
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.co/api/planets/1/",
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
      ],
      "species": ["https://swapi.co/api/species/1/"],
      "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.co/api/people/1/"
    }
*/
