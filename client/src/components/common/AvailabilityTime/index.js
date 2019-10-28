import React from 'react';
import { Icon, Table } from 'antd';
import propTypes from 'prop-types';
import func from './filterAvailableTime';

import './style.css';

const Available = ({ availableityTime }) => {
  const tableData = func(availableityTime);
  const columns = [
    {
      title: 'Day',
      dataIndex: 'day',
      key: 'day',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: 'to',
    },
  ];
  return (
    <section className="Available_contailner">
      <h2>
        <Icon type="hourglass" /> Available Time
      </h2>
      <Table
        key="table"
        dataSource={tableData}
        columns={columns}
        className="Availabile_table"
      />
    </section>
  );
};

export default Available;
Available.propTypes = {
  availableityTime: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string.isRequired,
      from: propTypes.string.isRequired,
      to: propTypes.string.isRequired,
    })
  ).isRequired,
};
