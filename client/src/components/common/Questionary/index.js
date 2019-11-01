import React from 'react';

import './style.css';
import { Form, Steps, Button, message } from 'antd';
import renderSteps from './renderSteps';
import options from './qustionsStatic';

const { Step } = Steps;

class BarBrogress extends React.Component {
  state = {
    current: 0,
    value: {
      Q1: '0',
      Q2: '0',
      Q3: '0',
      Q4: '0',
      Q5: '0',
      Q6: '0',
      Q7: '0',
      Q8: '0',
    },
  };

  onChange = e => {
    this.setState(prevState => ({
      ...prevState,
      value: { ...prevState.value, [e.target.id]: e.target.value },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  next() {
    this.setState(prevState => ({
      current: prevState.current + 1,
    }));
  }

  prev() {
    this.setState(prevState => ({
      current: prevState.current - 1,
    }));
  }

  render() {
    const steps = renderSteps({
      onChange: this.onChange,
      state: this.state,
      options,
    });
    const { current } = this.state;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="signup-page__form"
        {...this.props}
      >
        <Steps current={current} {...this.props}>
          {steps.map(item => {
            return (
              <Step
                key={item.title}
                title={item.title}
                {...this.props}
                description={item.description}
                subTitle={item.subTitle}
              />
            );
          })}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              htmlType="submit"
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
      </Form>
    );
  }
}

export default BarBrogress;
