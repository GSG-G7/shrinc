import React from 'react';
import { Collapse } from 'antd';
import propTypes from 'prop-types';

import './style.css';
import CardContent from './cardContent';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);

const Card = ({ data }) => {
  return (
    <Collapse accordion>
      {data.map(({ avatar, fullName, approach, types, priceRange }) => (
        <Panel
          header={fullName}
          key={fullName}
          extra={genExtra(priceRange)}
          className="card__header"
        >
          <CardContent
            avatar={avatar}
            name={fullName}
            approach={approach}
            type={types}
          />
        </Panel>
      ))}
    </Collapse>
  );
};
Card.propTypes = {
  data: propTypes.isRequired,
};
export default Card;
