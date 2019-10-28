import React from 'react';

import './style.css';

const CardContent = data => (
  <div>
    <div className="card__photo">
      <img src={data.avatar} alt={data.name} />
    </div>
    <div className="card__content">
      <h2 className="card__approach">{data.approach} </h2>
      <h3 className="card__type">{data.type}</h3>
    </div>
  </div>
);

export default CardContent;
