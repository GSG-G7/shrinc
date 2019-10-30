import React from 'react';
import propTypes from 'prop-types';
import { Icon } from 'antd';

import './style.css';

const Location = ({ locationInfo: { address, postalCode, map } }) => {
  return (
    <section>
      <div className="location_contact_container">
        <h2>
          <Icon type="global" /> Location
        </h2>
        <div className="location_contact_info">
          <div className="location_info">
            <h5 className="location_titles">Address</h5>
            <p>{address}</p>
          </div>
          <div className="location_info">
            <h5 className="location_titles">Postal Code</h5>
            <p>{postalCode}</p>
          </div>
        </div>
      </div>
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
