import React from 'react';
import { Spin } from 'antd';

import './style.css';

const Loader = () => {
  return (
    <div>
      <Spin size="large" />
    </div>
  );
};
export default Loader;
