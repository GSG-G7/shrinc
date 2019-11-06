import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import './style.css';

const Loader = ({ className }) => (
  <div className={className}>
    <Spin size="large" />
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
