import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'antd/lib/icon';
import Button from '../../common/Button';
import Header from '../../common/Header';
import shrincHome from '../../../assets/shrincHome.svg';
import './style.css';

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__header">
        <div className="home__image">
          <img
            src={shrincHome}
            alt="class-img"
            className="home__image-src"
          ></img>
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
            <Button
              value="Find the Right Therapy for You"
              className="home__buttons__types-btn"
            >
              <Icon type="copy" className="home__buttons__types-icon" />
              Find the Right Therapy for You
            </Button>
          </Link>
          <Link to="/filter" className="home__buttons__filter">
            <Button
              value="Search for Therapists"
              className="home__buttons__filter-btn"
            >
              <Icon type="filter" className="home__buttons__types-icon" />
              Search for Therapists
            </Button>
          </Link>
        </div>
        <div className="home__signup">
          <p className="home__signup__question">Are you therapist?</p>
          <span>
            <Link to="/signup" className="home__signup-link">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
