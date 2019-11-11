import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';

import CardContent from './cardContent';
import './style.css';

const { Panel } = Collapse;

const genExtra = price => (
  <span className="card__price">{price} $/Session</span>
);

const Card = ({ data }) => {
  return (
    <Collapse accordion>
      {data.map(therapy => {
        const {
          fullName,
          priceRange,
          image,
          approch,
          type,
          city,
        } = therapy.fields;
        const { id } = therapy;
        return (
          <Panel
            header={fullName}
            key={fullName}
            extra={genExtra(priceRange)}
            className="card__header"
          >
            <CardContent
              image={image[0].url}
              name={fullName}
              type={type}
              city={city}
              approach={approch}
              id={id}
            />
          </Panel>
        );
      })}
    </Collapse>
  );
};
Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
