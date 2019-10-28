import React from 'react';
import { Steps, Button, message } from 'antd';
import questions from './questions';
import './style.css';

const { Step } = Steps;

class StepsBar extends React.Component {
  state = {
    current: 0,
  };

  next() {
    this.setState(prevState => ({ current: prevState.current + 1 }));
  }

  prev() {
    this.setState(prevState => ({ current: prevState.current - 1 }));
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps direction="horizontal" current={current}>
          {questions.map(item => (
            <Step direction="horizontal" key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{questions[current].content}</div>
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
