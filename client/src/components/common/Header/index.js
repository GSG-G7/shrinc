import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <div className="header__bar">
          <div className="menu-icon"></div>
        </div>
      </div>
    );
  }
}

export default Header;
