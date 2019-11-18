import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';

const SingleChoiceQuestion = props => {
  const { onChange, options, id, value, keyValue } = props;
  return (
    <div>
      {options.question && <h1 className="qusetion">{options.question}</h1>}
      <Radio.Group
        key={keyValue}
        onChange={onChange}
        value={value[0]}
        className="qusetion__group"
      >
        {options.answers.map((answer, index) => (
          <Radio
            value={index.toString()}
            id={id}
            key={answer}
            className="qusetion__span"
          >
            {answer}
          </Radio>
        ))}
      </Radio.Group>
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
