import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Form, Steps, Button, notification } from 'antd';
import options from './qustionsStatic';
import MultiChoicesQuestion from './MultiChoicesQuestion';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import rateHighestTypeTherapy from '../../../utils';

const { Step } = Steps;

class Questionnaire extends Component {
  state = {
    current: 0,
    value: {
      Q1: [],
      Q2: [],
      Q3: [],
      Q4: [],
      Q5: [],
      Q6: [],
      Q7: [],
      Q8: [],
      Q9: [],
      Q10: [],
    },
  };

  onMultiChange = e => {
    const { current } = this.state;
    const questionValue = `Q${current + 1}`;
    this.setState(prevState => ({
      ...prevState,
      value: {
        ...prevState.value,
        [questionValue]: [...e],
      },
    }));
  };

  onSingleChange = e => {
    this.setState(prevState => ({
      ...prevState,
      value: { ...prevState.value, [e.target.id]: [e.target.value] },
    }));
  };

  openNotificationWithIcon = () => {
    notification.error({
      message: 'you shuold at least choose an option',
      duration: 2,
    });
  };

  handleSubmit = e => {
    const {
      history: { push },
    } = this.props;
    const { value: answers, current } = this.state;
    e.preventDefault();
    const questionValue = `Q${current + 1}`;
    if (!answers[questionValue].length) {
      this.openNotificationWithIcon();
    } else {
      const resultPoints = rateHighestTypeTherapy(answers);
      push({
        pathname: '/result',
        state: { resultPoints },
      });
    }
  };

  next = () => {
    const { current, value } = this.state;
    const questionValue = `Q${current + 1}`;
    if (!value[questionValue].length) {
      this.openNotificationWithIcon();
    } else {
      this.setState(prevState => ({
        current: prevState.current + 1,
      }));
    }
  };

  prev = () => {
    this.setState(prevState => ({
      current: prevState.current - 1,
    }));
  };

  render() {
    const { current, value } = this.state;
    const currentStep = current + 1;
    const values = Object.keys(value);
    const questionValue = `Q${currentStep}`;

    return (
      <Form onSubmit={this.handleSubmit} className="Questionary__form">
        <Steps current={current}>
          {values.map(item => {
            return <Step key={item} />;
          })}
        </Steps>
        <div className="steps-content">
          {options[questionValue].type === 'multi' ? (
            <MultiChoicesQuestion
              keyValue={`q${currentStep}`}
              onMultiChange={this.onMultiChange}
              defaultValue={value[questionValue]}
              options={options[questionValue]}
              id={questionValue}
            />
          ) : (
            <SingleChoiceQuestion
              keyValue={`q${currentStep}`}
              onChange={this.onSingleChange}
              value={value[questionValue]}
              options={options[questionValue]}
              id={questionValue}
            />
          )}
        </div>
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ marginRight: 10 }} onClick={this.prev}>
              Previous
            </Button>
          )}
          {current < values.length - 1 && (
            <Button type="primary" onClick={this.next}>
              Next
            </Button>
          )}
          {current === values.length - 1 && (
            <Button htmlType="submit">Done</Button>
          )}
        </div>
      </Form>
    );
  }
}

Questionnaire.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default withRouter(Questionnaire);
