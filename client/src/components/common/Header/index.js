import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MenuIcon, headerLogo, MenuLogo } from '../../assets';
import menuData from './menuData';
import Button from '../Button';
import './style.css';

class Header extends Component {
  state = {
    isClosed: true,
  };

  onclick = () => {
    this.setState(prevState => ({ isClosed: !prevState.isClosed }));
  };

  onclickForModel = e => {
    if (e.target.id === 'model') {
      this.setState(() => ({ isClosed: true }));
    }
  };

  render() {
    const { isClosed } = this.state;

    return (
      <div className="header">
        <div className="header__bar">
          <Button
            className="menu-icon"
            aria-label="menu-icon"
            onClick={this.onclick}
          >
            <MenuIcon />
          </Button>
          <Link to="/" className="header-logo">
            <img src={headerLogo} alt="header logo" />
          </Link>
        </div>
        <div
          className={!isClosed ? 'menu__model' : ''}
          onClick={this.onclickForModel}
          id="model"
          role="button"
          aria-label="menu-model"
          tabIndex={0}
        >
          <nav className={isClosed ? 'hide' : 'menu__nav'}>
            <div
              className="menu__head"
              role="button"
              tabIndex={0}
              onClick={this.onclick}
            >
              <h2 className="menu__title">Menu</h2>
            </div>
            <ul className="menu__list">
              <div className="menu_img">
                <img src={MenuLogo} alt="shrinc" />
              </div>
              {menuData.map(({ label, url, icon }) => (
                <li key={label} className="menu__item">
                  {icon || ''}
                  <Link to={url} className="menu__link" onClick={this.onclick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
