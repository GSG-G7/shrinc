import React, { Fragment } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Card from '../../common/Card';
import FilterResult from '../../common/FilterResult';

import './style.css';

class ResultsPage extends React.Component {
  state = {
    therapist: [],
    type: [],
  };

  async componentDidMount() {
    await this.getTheHighestTherapyType();
    const { type } = this.state;
    await this.getTherapiestData(type);
  }

  getTherapiestData = types => {
    types.forEach(async type => {
      try {
        const result = await axios.post('/api/v1/filter', {
          data: { type },
        });
        const {
          data: { data: therapist },
        } = result;
        this.setState(prevState => ({
          ...prevState,
          therapist: [...prevState.therapist, ...therapist],
        }));
      } catch (e) {
        this.openNotificationWithIcon(e);
      }
    });
  };

  getTheHighestTherapyType() {
    const {
      location: {
        state: { resultPoints },
      },
    } = this.props;
    const finalResult = [
      { rate: resultPoints.CBT, text: 'CBT' },
      { rate: resultPoints.PD, text: 'PD' },
      { rate: resultPoints.Hu, text: 'Hu' },
      { rate: resultPoints.In, text: 'In' },
      { rate: resultPoints.C, text: 'C' },
      { rate: resultPoints.STPD, text: 'STPD' },
    ];
    const maxValue = Math.max(...finalResult.map(o => o.rate), 0);
    const type = finalResult
      .filter(element => element.rate === maxValue)
      .map(element => element.text);

    this.setState(prevState => ({
      ...prevState,
      type: [...prevState.type, ...type],
    }));
  }

  openNotificationWithIcon = e => {
    notification.error({
      message: 'something wrong !!',
      description: e.message,
      duration: 2,
    });
  };

  render() {
    const { therapist, type } = this.state;
    const {
      location: {
        state: { resultPoints },
      },
    } = this.props;
    return (
      <Fragment>
        <div className="Results">
          <FilterResult resultPoints={resultPoints} />
          <Helmet>
            <title>Results</title>
          </Helmet>
          <div className="Results__TherapyType">
            <h3 className="Results__TherapyType__title">Therapy Type</h3>
            <h4 className="Results__TherapyType__name">{type.join(' and ')}</h4>
          </div>
          <div className="Results__TherapistsNames">
            <h3 className="Results__TherapistsNames__suggest">
              According to your answers, we would suggest that you search for
              therapists specializing in:
            </h3>
            <div className="Results__TherapistsNames__Cards">
              {!therapist.length ? (
                <h1>Loading</h1>
              ) : (
                <Card data={therapist} props={this.props} />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ResultsPage.propTypes = {
  location: PropTypes.objectOf().isRequired,
};

export default ResultsPage;
