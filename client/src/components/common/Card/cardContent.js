/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

import './style.css';

export default class CardContent extends React.Component {
  handleClick = () => {
    const { id } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.props.history.push(`/profile/${id}`);
  };

  render() {
    const { image, approach, type, city } = this.props;
    return (
      <div className="card__content" onClick={this.handleClick}>
        <Avatar
          shape="circle"
          src={image}
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
  }
}

CardContent.propTypes = {
  image: PropTypes.string.isRequired,
  approach: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  props: PropTypes.isRequired,
  id: PropTypes.isRequired,
};
