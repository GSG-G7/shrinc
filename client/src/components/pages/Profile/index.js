import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import axios from 'axios';

import AvailableityTime from '../../common/AvailabilityTime';
import Location from '../../common/Location';

import './style.css';

class Profile extends Component {
  state = {
    profileData: '',
  };

  async componentDidMount() {
    try {
      const profileData = await axios.get('/api/v1/profile/recZoOgsH458Jl04m');
      const {
        data: {
          data: { fields },
        },
      } = profileData;
      this.setState({ profileData: fields });
    } catch (err) {
      // console.log(err.statusCode); // need to handle
    }
  }

  renderCode = () => {
    const { profileData } = this.state;
    if (profileData) {
      const {
        profileData: {
          avalibility,
          city,
          email,
          fullName,
          image,
          // is_valid: isValid,
          postCode,
          priceRange,
          remote,
          skype,
          types,
        },
      } = this.state;
      return (
        <section className="font">
          <section className="profile_card_container">
            <div className="profile_card">
              <Avatar
                shape="circle"
                src={image[0].url}
                className="profile_avatar"
                size={120}
                icon="user"
              />
              <div className="profile_card_b">
                <h1 className="profile_username">{fullName}</h1>
                <h4 className="profile_user_info">therapy Approach</h4>
                <h4 className="profile_user_info">{types}</h4>
              </div>
            </div>
            <div className="profile_card_fees">
              <h3>
                <Icon type="dollar" />
                &nbsp; &nbsp;
                <span>Fees {priceRange}$ Session</span>
              </h3>
            </div>
          </section>
          <AvailableityTime availableityTime={avalibility} />
          <section className="profile_contact_container">
            <h2>
              <Icon type="wifi" /> Is remotly
            </h2>
            <div className="profile_contact_info">
              <p>{remote ? 'Yes' : 'No'}</p>
            </div>
          </section>
          <section className="profile_contact_container">
            <h2>
              <Icon type="phone" /> Contact Info
            </h2>
            <div className="profile_contact_info">
              <h4>Email</h4>
              <p>{email}</p>
              <h4>Phone</h4>
              <p>059797000</p>
              <h4>Skype</h4>
              <p>{skype}</p>
            </div>
          </section>
          <Location
            address={city}
            postCode={postCode}
            imageURL="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_960_720.jpg"
          />
        </section>
      );
    }
    return 'loading';
  };

  render() {
    return <div>{this.renderCode()}</div>;
  }
}

export default Profile;
