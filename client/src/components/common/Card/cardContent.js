import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';

import './style.css';

export default class CardContent extends React.Component {
  handleClick = id => {
    const {
      props: { history },
    } = this.props;
    history.push(`/profile/${id}`);
  };

  render() {
    const { image, approach, type, city, id } = this.props;
    return (
      <div
        role="button"
        tabIndex={0}
        className="card__content"
        onClick={() => this.handleClick(id)}
      >
        <Avatar
          shape="circle"
          src={image}
          size={100}
          icon="user"
          className="card__photo"
        />
        <div className="cardContent_info">
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
  props: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};
