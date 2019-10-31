import React from 'react';
import { Collapse } from 'antd';

import CardContent from './cardContent';
import './style.css';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);

const Card = therapist => {
  return (
    <Collapse accordion>
      {therapist.data.map(therapy => {
        const {
          fullName,
          priceRange,
          image,
          approach,
          type,
          city,
        } = therapy.fields;
        return (
          <Panel
            header={fullName}
            key={fullName}
            extra={genExtra(priceRange)}
            className="card__header"
          >
            <CardContent
              avatar={image[0].url}
              name={fullName}
              type={type}
              city={city}
              approach={approach}
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};
export default Card;
