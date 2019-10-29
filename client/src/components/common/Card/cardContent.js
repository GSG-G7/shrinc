import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const CardContent = ({ avatar, name, approach, type }) => (
  <div className="card__content">
    <img src={avatar} alt={name} className="card__photo" />
    <div>
      <h2 className="card__approach">{approach} </h2>
      <h3 className="card__type">{type}</h3>
    </div>
  </div>
);

CardContent.propTypes = {
  avatar: propTypes.string.isRequired,
  approach: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
export default CardContent;
