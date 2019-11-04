import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Card from '../../common/Card';
import Loader from '../../common/Loader';
import FilterResult from '../../common/FilterResult';

import './style.css';

class ResultsPage extends React.Component {
  state = {
    therapist: [],
    type: [],
    noResult: '',
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
        this.setState(prevState =>
          therapist.length
            ? {
                ...prevState,
                therapist: [...prevState.therapist, ...therapist],
              }
            : { noResult: 'Unfortunately there are no results' }
        );
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

  showPoint = type => {
    const {
      location: {
        state: { resultPoints },
      },
    } = this.props;

    const fullTypeName = {
      CBT: 'Cognitive Behavioural Therapy',
      PD: 'Psychodynamic Therapy',
      Hu: 'Humanistic psychotherapy',
      In: 'ntegrative psychotherapy',
      C: 'Counselling',
      STPD: 'Short Term Psychodynamic Psychotherapy',
    };

    return (
      <li>{`${fullTypeName[type]}( ${type} ) : ${resultPoints[type]}`}</li>
    );
  };

  render() {
    const { therapist, type, noResult } = this.state;
    const {
      location: {
        state: { resultPoints },
      },
    } = this.props;
    return (
      <div className="Results">
        <FilterResult resultPoints={resultPoints} />
        <Helmet>
          <title>Results</title>
        </Helmet>

        <div className="Results__TherapistsNames">
          <h3 className="Results__TherapistsNames__suggest">
            According to your answers, we would suggest that you search for
            therapists specializing in:
            <p className="Results__TherapyType__name">{type.join(' and ')}</p>
          </h3>
          <div className="Results__TherapistsNames__Cards">
            {!therapist.length ? (
              noResult || <Loader />
            ) : (
              <Card data={therapist} props={this.props} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

ResultsPage.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.object),
  }),
};

ResultsPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.objectOf(PropTypes.object),
  }),
};

export default ResultsPage;
