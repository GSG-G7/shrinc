import React from 'react';
import { Collapse, Icon } from 'antd';
import { Helmet } from 'react-helmet';

import typesData from './staticData';
import './style.css';

const { Panel } = Collapse;

const TherapyType = () => {
  const customPanelStyle = {
    background: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  return (
    <section className="types-page">
      <Helmet>
        <title>Therapy Types</title>
      </Helmet>
      <h2 className="types-page__title">Types of Therapy</h2>
      <Collapse
        accordion
        bordered={false}
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        {typesData.map(type => {
          const { title, key, text } = type;
          return (
            <Panel header={title} key={key} style={customPanelStyle}>
              <p className="types-page__content">{text}</p>
            </Panel>
          );
        })}
      </Collapse>
    </section>
  );
};

export default TherapyType;
