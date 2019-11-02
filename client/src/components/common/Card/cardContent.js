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
  avatar:
    'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
  approach: 'Therapy Approach',
  type: 'CBT therapy',
};

CardContent.propTypes = {
  avatar: propTypes.string,
  approach: propTypes.string,
  type: propTypes.string,
};

export default CardContent;
