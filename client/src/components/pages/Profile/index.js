import React, { Component } from 'react';
import { Icon, Avatar } from 'antd';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import AvailableityTime from '../../common/AvailabilityTime';
import Loader from '../../common/Loader';
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
      const error500 = err.message.includes('500');
      if (error500) {
        history.push('/500');
      } else {
        history.push('/404');
      }
    }
  }

  renderCode = () => {
    const { profileData } = this.state;
    if (!profileData) return <Loader />;

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

    const handleInsuranceCompanies = data => {
      const companyList = JSON.parse(data);
      return companyList.map(item => <p key={item}>{item}</p>);
    };

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
            <h4>
              <span aria-hidden>-</span> Email
            </h4>
            <p>{email}</p>
            {skype && (
              <React.Fragment>
                <h4>
                  <span aria-hidden>-</span> Skype
                </h4>
                <p>{skype}</p>
              </React.Fragment>
            )}
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="bank" /> Insurance Companies
          </h2>
          <div className="profile_contact_info">
            {handleInsuranceCompanies(insurance)}
          </div>
        </section>
        <section className="profile_contact_container">
          <h2>
            <Icon type="global" /> Location
          </h2>
          <div className="profile_contact_info">
            <h4>
              <span aria-hidden>-</span> City
            </h4>
            <p>{city}</p>
            <h4>
              <span aria-hidden>-</span> Postal code
            </h4>
            <p>{postCode}</p>
          </div>
        </section>
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
