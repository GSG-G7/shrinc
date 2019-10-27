import React from 'react';
import { Steps } from 'antd';
import questions from './questions';

const { Step } = Steps;

const StepsBar = ({ current, ...props }) => {
  return (
    <Steps current={current}>
      {questions.map(question => {
        return <Step {...props} />;
      })}
    </Steps>
  );
};

StepsBar.propTypes = {
  current: PropTypes.string.isRequired,
};

export default StepsBar;
