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

CardContent.defaultProps = {
  avatar: 'sad',
  approach: 'ads',
  type: 'propTypes.string',
};

CardContent.propTypes = {
  avatar: propTypes.string,
  approach: propTypes.string,
  type: propTypes.string,
};

export default CardContent;
