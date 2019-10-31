import React from 'react';
import { Icon, Table } from 'antd';
import propTypes from 'prop-types';

import columns from './colomn';
import './style.css';

const Available = ({ availableityTime }) => {
  const time = JSON.parse(availableityTime);

  const tableData = time
    .filter(item => item.from && item.to)
    .map((element, index) => ({
      day: element.day,
      from: element.from,
      to: element.to,
      key: index,
    }));
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
  availableityTime: propTypes.string.isRequired,
};

export default Available;
