import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, headerLogo } from '../../assets';
import './style.css';

class Header extends Component {
  state = {};

  onclick = () => {
    console.log('fadi asd');
  };

  render() {
    return (
      <div className="header">
        <div className="header__bar">
          <button type="button" className="menu-icon" onClick={this.onclick}>
            <MenuIcon onClick={this.onclick} />
          </button>
          <Link to="home">
            <img src={headerLogo} alt="headerLogo" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
