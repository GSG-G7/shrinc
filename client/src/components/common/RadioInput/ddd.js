import React from 'react';
import { Radio } from 'antd';
import questions from './questions';
import { RFC_2822 } from 'moment';

class RadioGroupInputs extends React.Component {
  state = {
    selected: 2,
  };

  onChange = (e, id) => {

    this.setState({
      selected: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        {questions.length < 1 ? (
          'Loading...'
        ) : (
          <div>
            {questions.map(question => (
              <Radio.Group
                onChange={e => this.onChange(e, question.id)}
                value={this.state.selected}
              >
                {question.text}
                {question.options.map(option => {
                  return (
                    <Radio value={option.id} style={radioStyle}>
                      {option.content}
                    </Radio>
                  );
                })}
              </Radio.Group>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default RadioGroupInputs;


