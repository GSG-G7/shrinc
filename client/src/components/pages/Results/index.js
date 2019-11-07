import React from 'react';
import axios from 'axios';
import { notification } from 'antd';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { FilterResult, Card, Loader } from '../../common';
import './style.css';

class ResultsPage extends React.Component {
  state = {
    therapist: [],
    type: [],
    noResult: '',
  };

  componentDidMount = () => {
    const {
      location: { state },
    } = this.props;
    if (state && state.resultPoints) {
      this.getTheHighestTherapyType();
      const { type } = this.state;
      this.getTherapiestData(type);
    }
  };

  getTherapiestData = types => {
    types.forEach(async type => {
      try {
        const result = await axios.post('/api/v1/filter', {
          data: { type },
        });
        const {
          data: { data: therapist },
        } = result;
        this.setState(state =>
          therapist.length
            ? {
                ...state,
                therapist: [...state.therapist, ...therapist],
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
    const maxValue = Math.max(...finalResult.map(result => result.rate), 0);
    const type = finalResult.reduce((accumulator, { rate, text }) => {
      if (rate === maxValue) accumulator.push(text);
      return accumulator;
    }, []);

    this.setState({ type });
  }

  goToQuestionnaire = () => {
    const {
      history: { push },
    } = this.props;
    push('/questionnaire');
  };

  openNotificationWithIcon = e => {
    notification.error({
      message: 'something wrong !!',
      description: e.message,
      duration: 2,
    });
  };

  render() {
    const {
      location: { state },
    } = this.props;
    const resultPoints = state && state.resultPoints;

    const { type, therapist, noResult } = this.state;
    if (!resultPoints) {
      return <Loader>{this.goToQuestionnaire(this.props)}</Loader>;
    }
    return (
      <div className="Results">
        <FilterResult resultPoints={resultPoints} />
        <Helmet>
          <title>Results</title>
        </Helmet>

        <div className="Results__TherapistsNames">
          <h3 className="Results__TherapistsNames__suggest">
            According to your answers, we would suggest that you search for
            therapists specializing in:&nbsp;&nbsp;
            <small className="Results__TherapyType__name">
              {type.join(' and ')}
            </small>
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
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(ResultsPage);
