import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import AvailableityTime from '../../common/AvailabilityTime';
import Location from '../../common/Location';
import './style.css';

class Profile extends Component {
  state = {
    profileData: '',
  };

  async componentDidMount() {
    const { history } = this.props;
    try {
      const {
        match: {
          params: { id },
        },
      } = this.props;

      const profileData = await axios.get(`/api/v1/profile/${id}`);
      const {
        data: {
          data: { fields },
        },
      } = profileData;
      this.setState({ profileData: fields });
    } catch (err) {
      const error500 = err.response.status === 500;
      if (error500) {
        history.push('/500');
      } else {
        history.push('/404');
      }
    }
  }

  renderCode = () => {
    const { profileData } = this.state;
    if (!profileData) return 'loading';
    const {
      profileData: {
        avalibility,
        city,
        email,
        fullName,
        image,
        postCode,
        priceRange,
        remote,
        skype,
        insurance,
        language,
        approch,
        type,
      },
    } = this.state;

    return (
      <section className="font">
        <Helmet>
          <title>Profile</title>
        </Helmet>
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
              <h4 className="profile_user_info">{approch}</h4>
              <h4 className="profile_user_info">{type}</h4>
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
            <Icon type="safety-certificate" /> Insurance
          </h2>
          <div className="profile_contact_info">
            <p>{insurance}</p>
          </div>
          <h2>
            <Icon type="read" /> Languages
          </h2>
          <div className="profile_contact_info">
            <p>{JSON.parse(language).map(item => `${item}, `)}</p>
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="phone" /> Contact Info
          </h2>
          <div className="profile_contact_info">
            <h4>Email</h4>
            <p>{email}</p>
            {skype && (
              <React.Fragment>
                <h4>Skype</h4>
                <p>{skype}</p>
              </React.Fragment>
            )}
          </div>
        </section>
        <Location
          address={city}
          postCode={postCode}
          imageURL="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_960_720.jpg"
        />
      </section>
    );
  };

  render() {
    return this.renderCode();
  }
}
Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
export default Profile;
