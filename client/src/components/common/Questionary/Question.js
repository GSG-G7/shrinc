import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

import './style.css';

const Question = props => {
  const { onChange, options, id, value, keyValue } = props;
  const needClass = id === 'Q9' || id === 'Q10';
  return (
    <Fragment>
      {options[id].question && (
        <h1 className={`qusetion ${needClass ? 'big-Qusetion' : ''}`}>
          {options[id].question}
        </h1>
      )}
      <Radio.Group
        key={keyValue}
        onChange={onChange}
        value={value * 1}
        className={`qusetion__group${needClass ? 'big_group' : ''}`}
      >
        {options[id].answers.map((answer, index) => (
          <Radio value={index} id={id} key={answer} className="qusetion__span">
            {answer}
          </Radio>
        ))}
      </Radio.Group>
    </Fragment>
  );
};

Question.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Question;
