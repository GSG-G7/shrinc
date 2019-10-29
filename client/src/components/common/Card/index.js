import React from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';

import './style.css';
import CardContent from './cardContent';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);
const Card = ({ data }) => (
  <Collapse accordion>
    {data.map(({ avatar, name, approach, type, priceRange }) => (
      <Panel
        header={name}
        key={name}
        extra={genExtra(priceRange)}
        className="card__header"
      >
        <CardContent
          avatar={avatar}
          name={name}
          approach={approach}
          type={type}
        />
      </Panel>
    ))}
  </Collapse>
);

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      approach: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      priceRange: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Card;
