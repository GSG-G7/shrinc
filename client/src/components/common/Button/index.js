import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} type="button" {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
