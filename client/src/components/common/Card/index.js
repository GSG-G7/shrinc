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
          approach = 'approach',
          types,
          city,
        } = therapy.fields;
        const TherapistId = therapy.id;
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
              type={types}
              city={city}
              approach={approach}
              props={therapist.props}
              id={TherapistId}
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};
export default Card;
