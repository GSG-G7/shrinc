import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const { Group: CheckboxGroup } = Checkbox;
const MultiQuestion = props => {
  const {
    onMultiChange,
    options: { question, answers },
    id,
    defaultValue,
    keyValue,
  } = props;
  return (
    <div>
      <h1 className="qusetion">{question}</h1>
      <CheckboxGroup
        key={keyValue}
        onChange={onMultiChange}
        defaultValue={defaultValue}
        className="qusetion__group"
      >
        {answers.map((answer, index) => (
          <Checkbox
            value={index.toString()}
            id={id}
            key={answer}
            className="qusetion__span"
          >
            {answer}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </div>
  );
};

MultiQuestion.propTypes = {
  onMultiChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    type: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
export default MultiQuestion;
