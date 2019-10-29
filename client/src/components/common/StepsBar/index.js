import React from 'react';
import { Steps, Button, message, Radio } from 'antd';

import questions from './questions';

import './style.css';

const { Step } = Steps;

class StepsBar extends React.Component {
  state = {
    current: 0,
    value: 1,
  };

  onChange = e => {
    // console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  next() {
    this.setState(prevState => ({ current: prevState.current + 1 }));
  }

  prev() {
    this.setState(prevState => ({ current: prevState.current - 1 }));
  }

  render() {
    const { current, value } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <Steps direction="horizontal" current={current}>
          {questions.map(item => (
            <Step direction="horizontal" key={item.id} />
          ))}
        </Steps>
        <div className="steps-content">
          {' '}
          {`${questions[current].id + 1}- `}
          {questions[current].content}
          <div className="steps-answers">
            <Radio.Group onChange={this.onChange} value={value}>
              {questions[current].options.map(question => (
                <Radio style={radioStyle} value={question.id}>
                  {question.content}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="steps-action">
          {current < questions.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === questions.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default StepsBar;
