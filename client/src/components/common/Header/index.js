import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, headerLogo, MenuLogo } from '../../assets';
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
        {/* side bar */}
        <div className="menu-model" id="model">
          <nav className="nav">
            <div className="menu__head">
              <h2 className="menu__title">Menu</h2>
            </div>
            <ul className="menu__list">
              <div className="menu_img">
                <img src={MenuLogo} alt="shrinc" />
              </div>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
