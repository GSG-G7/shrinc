import React from 'react';
import propTypes from 'prop-types';
import { Icon, Avatar } from 'antd';

import AvailableityTime from '../../common/AvailabilityTime';
import Location from '../../common/Location';

import './style.css';

const Profile = ({
  profileData: {
    isRemote,
    cardInfo: { username, imgUrl, therapyApproach, therapyType, priceRange },
    available,
    contactinfo: { email, phone, skype },
    locationInfo,
  },
}) => {
  return (
    <section className="font">
      {/* 
      -- card 
      */}
      <section className="profile_card_container">
        <section className="profile_card">
          <Avatar
            shape="circle"
            src={imgUrl}
            className="profile_avatar"
            size={120}
            icon="user"
          />

          <section className="profile_card_b">
            <h1 className="profile_username">{username}</h1>
            <h4 className="profile_user_info">{therapyApproach}</h4>
            <h4 className="profile_user_info">{therapyType}</h4>
          </section>
        </section>
        <section className="profile_card_fees">
          <h3>
            <Icon type="dollar" />
            &nbsp; &nbsp;
            <span>Fees {priceRange}$ Session</span>
          </h3>
        </section>
      </section>
      {/* 
      -- Available time 
      */}
      <AvailableityTime availableityTime={available} />
      {/* 
      -- is remote
       */}
      <section className="profile_contact_container">
        <h1>
          <Icon type="wifi" /> Is remotly
        </h1>
        <section className="profile_contact_info">
          <p>{isRemote ? 'Yes' : 'No'}</p>
        </section>
      </section>
      {/** 
      -- contact
       */}
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
      {/** 
      -- location
       */}
      <Location locationInfo={locationInfo} />
    </section>
  );
};
Profile.propTypes = {
  profileData: propTypes.shape({
    isRemote: propTypes.bool.isRequired,
    cardInfo: propTypes.objectOf.isRequired,
    available: propTypes.objectOf.isRequired,
    contactinfo: propTypes.objectOf.isRequired,
    locationInfo: propTypes.objectOf.isRequired,
  }).isRequired,
};

export default Profile;
