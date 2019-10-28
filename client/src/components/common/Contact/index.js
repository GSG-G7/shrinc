import React from 'react';
import propTypes from 'prop-types';

import { Icon } from 'antd';

import './style.css';

const Contact = ({ contactinfo: { email, phone, skype } }) => {
  return (
    <section className="profile_contact_container">
      <h2>
        <Icon type="phone" /> Contact Info
      </h2>
      <section className="profile_contact_info">
        <h4>Email</h4>
        <p>{email}</p>
        <h4>Phone</h4>
        <p>{phone}</p>
        <h4>Skype</h4>
        <p>{skype}</p>
      </section>
    </section>
  );
};
export default Contact;
Contact.propTypes = {
  contactinfo: propTypes.shape({
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    skype: propTypes.string.isRequired,
  }).isRequired,
};
