import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'antd/lib/icon';
import Button from '../../common/Button';
import shrincHome from '../../../assets/shrincHome.svg';
import './style.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__image">
          <img src={shrincHome} alt="class-img" className="vision__img"></img>
        </div>
        <div className="home__box">
          <h3 className="home__title">Shrinc</h3>
          <h5 className="home__subTitle">therapy, simplified</h5>
        </div>
      </div>
      <div className="home__description">
        The key to natures therapy is feeling like a tiny part of it, not a
        master over it.
      </div>
      <div className="home__actions">
        <div className="home_buttons">
          <Link to="/types" className="home__buttons__types">
            <Icon type="copy" />
            <Button
              value="Find the Right Therapy for You"
              className="home__buttons__types-btn"
            />
          </Link>
          <Link to="/filter" className="home__buttons__filter">
            <Icon type="filter" />
            <Button
              value="Search for Therapists"
              className="home__buttons__filter-btn"
            />
          </Link>
        </div>
        <div className="home__signup">
          <p>Are you therapist?</p>
          <span>
            <Link to="/signup" className="home__signup">
              sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
