import React from 'react';
import { Collapse } from 'antd';

import './style.css';

import CardContent from './cardContent';
import data from './staticDataTesting';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);
const Card = () => {
  return (
    <Collapse accordion>
      {data.map(therpy => (
        <Panel
          header={therpy.name}
          key={therpy.name}
          extra={genExtra(therpy.priceRange)}
          className="card__header"
        >
          <CardContent data={therpy} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default Card;
