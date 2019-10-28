import React from 'react';
import { Collapse } from 'antd';
import './style.css';
import CardContent from './cardContent';
import data from './staticDataTesting';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Card = () => (
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      {/* <p>asd</p> */}
      <CardContent data={data} />
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
);

export default Card;
