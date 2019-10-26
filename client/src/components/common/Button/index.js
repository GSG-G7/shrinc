import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ className, onClick, children }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
