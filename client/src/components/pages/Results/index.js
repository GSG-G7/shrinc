import React from 'react';
import axios from 'axios';
import { notification } from 'antd';

import Card from '../../common/Card';

import './style.css';

export default class ResultsPage extends React.Component {
  state = {
    therapist: null,
    type: '',
  };

  async componentDidMount(types = 'PD') {
    try {
      const result = await axios.post('/api/v1/filter', {
        data: { types },
      });
      // const therapist = result.data.data;
      const {
        data: { data: therapist },
      } = result;
      this.setState({ therapist, type: types });
    } catch (e) {
      this.openNotificationWithIcon(e);
    }
  }

  openNotificationWithIcon = e => {
    notification.error({
      message: 'something wrong !!',
      description: e.message,
      duration: 2,
    });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { therapist, type } = this.state;
    return (
      <>
        <div className="Results">
          <div className="Results__TherapyType">
            <h3 className="Results__TherapyType__title">Therapy Type</h3>
            <h4 className="Results__TherapyType__name">{type}</h4>
          </div>
          <div className="Results__TherapistsNames">
            <h3 className="Results__TherapistsNames__suggest">
              According to your answers, we would suggest that you search for
              therapists specializing in:
            </h3>
            <div className="Results__TherapistsNames__Cards">
              {!therapist ? (
                <h1>Loading</h1>
              ) : (
                <Card data={therapist} props={this.props} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
