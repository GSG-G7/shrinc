import React from 'react';
import propTypes from 'prop-types';

import { Icon } from 'antd';

import './style.css';

const Location = ({ locationInfo: { address, postalCode, map } }) => {
  return (
    <section className="location_contact_container">
      <h2>
        <Icon type="global" /> Location
      </h2>
      <section className="location_contact_info">
        <section className="location_info">
          <h5 className="location_titles">Address</h5>
          <p>{address}</p>
        </section>
        <section className="location_info">
          <h5 className="location_titles">Postal Code</h5>
          <p>{postalCode}</p>
        </section>
      </section>
      <img src={map} alt="therapist location" className="location_img_map" />
    </section>
  );
};
export default Location;
Location.propTypes = {
  locationInfo: propTypes.shape({
    address: propTypes.string.isRequired,
    postalCode: propTypes.string.isRequired,
    map: propTypes.string.isRequired,
  }).isRequired,
};
