import React from 'react';
import { Table, TimePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';

import columns from './staticData';
import './style.css';

const TabelAvailability = ({ onChange }) => {
  const data = [
    {
      key: '0',
      day: 'Mon.',
      from: (
        <TimePicker
          onChange={(time, timeString) =>
            onChange(time, timeString, '0', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '0', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '1', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '1', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '2', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '2', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '3', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '3', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '4', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '4', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '5', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '5', 'to')}
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
          onChange={(time, timeString) =>
            onChange(time, timeString, '6', 'from')
          }
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
      to: (
        <TimePicker
          onChange={(time, timeString) => onChange(time, timeString, '6', 'to')}
          use12Hours
          format="h:mm a"
          defaultOpenValue={moment('00:00 am', 'HH:mm A')}
        />
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} className="table" />;
};

TabelAvailability.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TabelAvailability;
