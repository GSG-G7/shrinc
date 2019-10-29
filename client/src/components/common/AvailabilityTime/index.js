import React from 'react';
import { Icon, Table } from 'antd';
import propTypes from 'prop-types';

import columns from './colomn';
import './style.css';

const Available = ({ availableityTime }) => {
  const tableData = availableityTime.filter(item => item.from && item.to);
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

Available.propTypes = {
  availableityTime: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string.isRequired,
      from: propTypes.string.isRequired,
      to: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default Available;
