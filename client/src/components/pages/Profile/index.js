import React from 'react';
import propTypes from 'prop-types';

import Card from '../../common/CardProfile';
import AvailableityTime from '../../common/AvailabilityTime';

import Isremote from '../../common/IsRemote';
import Contact from '../../common/Contact';
import Location from '../../common/Location';

import './style.css';

const Profile = ({
  profileData: { isRemote, cardInfo, available, contactinfo, locationInfo },
}) => {
  return (
    <section className="font">
      <Card cardInfo={cardInfo} />
      <AvailableityTime availableityTime={available} /> {/** done */}
      <Isremote isRemote={isRemote} /> {/** done */}
      <Contact contactinfo={contactinfo} /> {/** done */}
      <Location locationInfo={locationInfo} /> {/** done* */}
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
