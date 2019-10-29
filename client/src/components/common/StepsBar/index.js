import React from 'react';
import { Steps, Button, message } from 'antd';
// import {Radio, Input } from 'antd';
import questions from './questions';
import './style.css';

const { Step } = Steps;

class StepsBar extends React.Component {
  state = {
    current: 0,
    // value:1,
  };

  // onChange = e => {
  //   // console.log('radio checked', e.target.value);
  //   this.setState({
  //     // value: e.target.value,
  //   });
  // };

  next() {
    this.setState(prevState => ({ current: prevState.current + 1 }));
  }

  prev() {
    this.setState(prevState => ({ current: prevState.current - 1 }));
  }

  render() {
    const { current } = this.state;
    // const radioStyle = {
    //   display: 'block',
    //   height: '30px',
    //   lineHeight: '30px',
    // };
    return (
      <div>
        <Steps direction="horizontal" current={current}>
          {questions.map(item => (
            <Step direction="horizontal" key={item.title} title={item.title} />
            //     <Radio.Group onChange={this.onChange} value={this.state.value}>
            //     <Radio style={radioStyle} value={1}>
            //       Option A
            //     </Radio>
            //     <Radio style={radioStyle} value={2}>
            //       Option B
            //     </Radio>
            //     <Radio style={radioStyle} value={3}>
            //       Option C
            //     </Radio>
            //     <Radio style={radioStyle} value={4}>
            //       More...
            //       {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            //    </Radio>
            // </Radio.Group>
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
