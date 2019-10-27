import React from 'react';
import { Collapse, Icon } from 'antd';

import typesData from './staticData';
import './style.css';

const TherapyType = () => {
  const { Panel } = Collapse;
  const customPanelStyle = {
    background: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  return (
    <section className="types-page">
      <h2 className="types-page__title">Types of Therapy</h2>
      <Collapse
        accordion
        bordered={false}
        destroyInactivePanel
        expandIcon={({ isActive }) => (
          <Icon type="caret-right" rotate={isActive ? 90 : 0} />
        )}
      >
        {typesData.map(type => {
          const { title, key, text } = type;
          return (
            <Panel
              header={title}
              key={key}
              style={customPanelStyle}
              className="types-page__point"
            >
              <p className="types-page__content">{text}</p>
            </Panel>
          );
        })}
      </Collapse>
    </section>
  );
};

export default TherapyType;
