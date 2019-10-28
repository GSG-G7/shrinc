import React from 'react';
import { Radio } from 'antd';

import './style.css';


const radio = () =>{    

  render() {
    const { value } = this.state;
    return (
      <div>
        return (
        <Radio value={value} onChange={onchange} style={radioStyle}>
          {content}
        </Radio>
        );
      </div>
    );
  }
}

export default radio;
