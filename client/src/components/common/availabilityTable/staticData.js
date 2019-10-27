import React from 'react';

const columns = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
    render: text => <span className="table__day">{text}</span>,
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

export default columns;
