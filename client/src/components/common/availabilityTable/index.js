import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Table, TimePicker } from 'antd';
import moment from 'moment';

const TabelAvailability = () => {
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

  const data = [
    {
      key: '0',
      day: 'Mon.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '1',
      day: 'Tue.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '2',
      day: 'Wed.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '3',
      day: 'Thu.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '4',
      day: 'Fri.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '5',
      day: 'Sat.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
    {
      key: '6',
      day: 'Sun.',
      from: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} className="table" />;
};

export default TabelAvailability;
