import React from 'react';
import { Icon, Table } from 'antd';
import PropTypes from 'prop-types';

import columns from './colomn';
import './style.css';

const Available = ({ availableityTime }) => {
  const time = JSON.parse(availableityTime);
  const filteredTimes = (accumulator, item) => {
    if (item.from && item.to) {
      accumulator.push({
        day: item.day,
        from: item.from,
        to: item.to,
        key: item.day,
      });
    }
    return accumulator;
  };
  const newAvailableTime = time.reduce(filteredTimes, []);

  return (
    <section className="Available_contailner">
      <h2>
        <Icon type="hourglass" /> Available Time
      </h2>
      <Table
        key="table"
        dataSource={newAvailableTime}
        columns={columns}
        className="Availabile_table"
      />
    </section>
  );
};

Available.propTypes = {
  availableityTime: PropTypes.string.isRequired,
};

export default Available;
