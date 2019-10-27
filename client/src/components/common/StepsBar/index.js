import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';
import 'antd/dist/antd.css';

const { Step } = Steps;

const StepsBar = ({ current, ...props }) => {
  return (
    <Steps current={current}>
      <Step {...props} />
      <Step {...props} />
      <Step {...props} />
      <Step {...props} />
      <Step {...props} />
    </Steps>
  );
};

StepsBar.propTypes = {
  current: PropTypes.string.isRequired,
};

export default StepsBar;
