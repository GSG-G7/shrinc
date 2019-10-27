import React from 'react';

import { Icon } from 'antd';

import './style.css';

export default () => {
  return (
    <section className="profile_contact_container">
      <h2>
        <Icon type="phone" /> Contact Info
      </h2>
      <section className="profile_contact_info">
        <h4>Email</h4>
        <p>sheley_watson_200@gmail.com</p>
        <h4>Phone</h4>
        <p>+02 532 -115-9914</p>

        <h4>Skype</h4>
        <p>SheleyWatson200</p>
      </section>
    </section>
  );
};
