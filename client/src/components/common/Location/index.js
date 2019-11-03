import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

import './style.css';

const Location = ({ address, postCode, imageURL }) => {
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
            <p>{postCode}</p>
          </div>
        </div>
      </div>
      <img
        src={imageURL}
        alt="therapist location"
        className="location_img_map"
      />
    </section>
  );
};

Location.propTypes = {
  address: PropTypes.string.isRequired,
  postCode: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default Location;
