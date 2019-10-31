import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';
import NotFound from '../../../assets/NotFound.png';
import './style.css';

export default () => {
  return (
    <div className="ErrorPage">
      <center>
        <img className="ErrorPage-img" src={NotFound} alt="Not Found" />
        <h2 className="ErrorPage-heading">Page Not Found </h2>
        <Link to="/">
          <Button value="Return to Home Page" className="ErrorPage-btn">
            Return to Home Page
          </Button>
        </Link>
      </center>
    </div>
  );
};
