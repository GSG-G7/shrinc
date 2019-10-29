import React from 'react';
import propTypes from 'prop-types';
import { Avatar } from 'antd';

import './style.css';

const CardContent = ({ avatar, approach, type }) => (
  <div className="card__content">
    <Avatar
      shape="circle"
      src={avatar}
      size={100}
      icon="user"
      className="card__photo"
    />
    <div>
      <h2 className="card__approach">{approach} </h2>
      <h3 className="card__type">{type}</h3>
    </div>
  </div>
);

CardContent.propTypes = {
  avatar: propTypes.string.isRequired,
  approach: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};
export default CardContent;
