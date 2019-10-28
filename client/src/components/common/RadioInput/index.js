import React from 'react';
import { Radio } from 'antd';
import questions from './questions';

import './style.css';

class RadioInput extends React.Component {
  state = {
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
  };

  onChange = (e, a) => {
    console.log(11111, a);
    console.log(e.target.value);

    this.setState({
      q1: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const {q1, q2, q3, q4} = this.state

    return (
      <div>
        {questions.map(question => {
          return (
            <Radio.Group
              onChange={e => this.onChange(e, question.id)}
              value={question.id}
              className="Radio__Group"
            >
              {question.options.map(option => {
                return (
                  <Radio
                    value={option.id}
                    onChange={this.onEntierChange}
                    style={radioStyle}
                  >
                    {option.content}
                  </Radio>
                );
              })}
            </Radio.Group>
          );
        })}
      </div>
    );
  }
}

export default RadioInput;
