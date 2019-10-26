import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../../assets';
import './style.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <div className="header__bar">
          <div className="menu-icon"></div>
          <Link to="fade">
            <MenuIcon />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
