import React from 'react';

import avatar from '../../../../assets/profile.svg';
import './style.css';

export default () => {
  return (
    <section className="profile_card_container">
      <img className="profile_card_a" src={avatar} alt="avatar" />
      <section className="profile_card_b">
        <h4>Therapy approach</h4>
        <h4>Therapy type</h4>
      </section>
    </section>
  );
};
