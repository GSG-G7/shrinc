import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const RadioInput = ({
  htmlFor,
  name,
  id,
  value,
  className,
  checked,
  onChange,
  children,
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className="input-label">
      <input
        name={name}
        id={id}
        type="radio"
        value={value}
        className={`radio__input ${className}`}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  );
};

RadioInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

RadioInput.defaultProps = {
  id: 0,
  className: '',
};
