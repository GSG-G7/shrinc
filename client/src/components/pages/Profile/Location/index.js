import React from 'react';

import { Icon } from 'antd';

import './style.css';
import map from '../../../../assets/map1.png';

export default () => {
  return (
    <section className="location_contact_container">
      <h2>
        <Icon type="global" /> Location
      </h2>
      <section className="location_contact_info">
        <section className="location_info">
          <h5 className="location_titles">Address</h5>
          <p>sheley_watson_200@gmail.com</p>
        </section>
        <section className="location_info">
          <h5 className="location_titles">Postal Code</h5>
          <p>+02 532-115-9914</p>
        </section>
      </section>
      <img src={map} alt="therapist location" className="location_img_map" />
    </section>
  );
};
