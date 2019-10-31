import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

import './style.css';

const CardContent = ({ avatar, approach, type, city }) => (
  <div className="card__content">
    <Avatar
      shape="circle"
      src={avatar}
      size={100}
      icon="user"
      className="card__photo"
    />
    <div>
      <h3 className="card__type">{type}</h3>
      <h3 className="card__type">{city}</h3>
      <h3 className="card__approach">{approach} </h3>
    </div>
  </div>
);

CardContent.propTypes = {
  avatar: PropTypes.string.isRequired,
  approach: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default CardContent;
