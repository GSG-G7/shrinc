import React from 'react';
import { Collapse } from 'antd';

import './style.css';
import CardContent from './cardContent';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);
const Card = data => {
  return (
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
};

export default Card;
