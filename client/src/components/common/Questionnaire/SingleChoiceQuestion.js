import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const { Group: RadioGroup } = Radio;
const SingleChoiceQuestion = props => {
  const {
    onChange,
    options: { question, answers },
    id,
    value,
    keyValue,
  } = props;
  return (
    <div>
      <h1 className="qusetion">{question}</h1>
      <RadioGroup
        key={keyValue}
        onChange={onChange}
        value={value[0]}
        className="qusetion__group"
      >
        {answers.map((answer, index) => (
          <Radio
            value={index.toString()}
            id={id}
            key={answer}
            className="qusetion__span"
          >
            {answer}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
};

SingleChoiceQuestion.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  keyValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
export default SingleChoiceQuestion;
