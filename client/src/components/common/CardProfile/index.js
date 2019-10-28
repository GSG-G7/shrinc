import React from 'react';
import { Icon, Avatar } from 'antd';
import propTypes from 'prop-types';

import './style.css';

const Card = ({ cardInfo: { imgUrl, therapyApproach, therapyType, fees } }) => {
  return (
    <section className="profile_card_container">
      <section className="profile_card">
        <Avatar shape="circle" src={imgUrl} size={100} icon="user" />

        <section className="profile_card_b">
          <h4>Therapy approach: {therapyApproach}</h4>
          <h4>Therapy type: {therapyType}</h4>
        </section>
      </section>
      <section className="profile_card_fees">
        <h3>
          <Icon type="dollar" />
          &nbsp; &nbsp;
          <span>Fees {fees}$ Session</span>
        </h3>
      </section>
    </section>
  );
};
export default Card;

Card.propTypes = {
  cardInfo: propTypes.shape({
    imgUrl: propTypes.string.isRequired,
    therapyApproach: propTypes.string.isRequired,
    therapyType: propTypes.string.isRequired,
    fees: propTypes.number.isRequired,
  }).isRequired,
};
