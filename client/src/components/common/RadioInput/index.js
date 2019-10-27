// import React from 'react';
// import { Radio } from 'antd';
// import questions from './questions';

// const RadioInput = (questions) => {
//   const radioStyle = {
//     display: 'block',
//     height: '30px',
//     lineHeight: '30px',
//   };
//   return (
//       {questions.map(question => {
//     <Radio.Group onChange={this.onChange} value="1">
//         const { text, options } = question;
//         {text}
//         <Radio style={radioStyle} value=''>
//           ''
//         </Radio>
//       })}
//     </Radio.Group>
//   );
// };

// export default RadioInput;

import React from 'react';
import { Steps, Button, message, Radio } from 'antd';

import S from './ddd';
import questions from './questions';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

class F extends React.Component {
  state = {
    current: 0,
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title}>
              {' '}
            </Step>
          ))}

          {/* {questions.map(question => (
            <Step>
              <Radio.Group
                onChange={e => this.onChange(e, question.id)}
                // value={this.state.selected}
              >
                {question.text}
                {question.options.map(option => {
                  return <Radio value={option.id}>{option.content}</Radio>;
                })}
              </Radio.Group>
            </Step>
          ))} */}
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

export default F;
