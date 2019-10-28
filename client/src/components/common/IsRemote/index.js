import React from 'react';

import { Icon } from 'antd';
import propTypes from 'prop-types';

import './style.css';

const IsRemoteComponent = ({ isRemote }) => {
  return (
    <section className="profile_contact_container">
      <h2>
        <Icon type="wifi" /> Is remotly
      </h2>
      <section className="profile_contact_info">
        <p>{isRemote ? 'Yes' : 'No'}</p>
      </section>
    </section>
  );
};

export default IsRemoteComponent;

IsRemoteComponent.propTypes = {
  isRemote: propTypes.bool.isRequired,
};
