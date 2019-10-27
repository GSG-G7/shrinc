import React from 'react';
import { Icon, Avatar } from 'antd';
import './style.css';
import avatar from '../../../../assets/profile.svg';

export default () => {
  return (
    <section className="profile_card_container">
      <section className="profile_card">
        <Avatar shape="circle" src={avatar} size={100} icon="user" />

        <section className="profile_card_b">
          <h4>Therapy approach</h4>
          <h4>Therapy type</h4>
        </section>
      </section>
      <section className="profile_card_fees">
        <h3>
          <Icon type="dollar" />
          &nbsp;&nbsp;Fees
        </h3>
        <p>15.00 $/Session</p>
      </section>
    </section>
  );
};
