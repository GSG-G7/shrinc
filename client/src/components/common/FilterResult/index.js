import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

import './style.css';

class FilterResult extends Component {
  state = { visible: true };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  showPoint = type => {
    const { resultPoints } = this.props;
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
    const { resultPoints } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Modal
          title="According to your answers to the questions your doctors have assessed and points You need the most points doctor"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ul className="result__list">
            {Object.keys(resultPoints).map(this.showPoint)}
          </ul>
        </Modal>
      </div>
    );
  }
}

FilterResult.propTypes = {
  resultPoints: PropTypes.objectOf().isRequired,
};

export default FilterResult;
