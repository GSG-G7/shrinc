import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';
import NotFound from '../../../assets/NotFound.png';
import './style.css';

export default () => {
  return (
    <div className="errorPage">
      <center>
        <img className="errorPage-img" src={NotFound} alt="Not Found" />
        <h2 className="errorPage-heading">Page Not Found </h2>
        <Link to="/">
          <Button className="errorPage-btn">Return to Home Page</Button>
        </Link>
      </center>
    </div>
  );
};
