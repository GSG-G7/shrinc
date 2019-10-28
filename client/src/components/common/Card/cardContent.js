import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const CardContent = ({ data: { avatar, name, approach, type } }) => (
  <div>
    <img src={avatar} alt={name} className="card__photo" />

    <div className="card__content">
      <h2 className="card__approach">{approach} </h2>
      <h3 className="card__type">{type}</h3>
    </div>
  </div>
);

CardContent.propTypes = {
  data: propTypes.shape({
    avatar: propTypes.string.isRequired,
    approach: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
  }).isRequired,
};
export default CardContent;
