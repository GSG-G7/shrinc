import React, { Component } from 'react';

import { Radio } from 'antd';

class RadioInput extends Component {
  state = {
    value: 1,
  };

  onChange = e => {
    // eslint-disable-next-line no-console
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          Option D
        </Radio>
      </Radio.Group>
    );
  }
}
export default RadioInput;
