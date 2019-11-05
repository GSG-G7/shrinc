import React, { Component } from 'react';

import axios from 'axios';
import { notification } from 'antd';

import { Card, FilterComponent, Loader } from '../../common';
import './style.css';

class Filter extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const result = await axios.get('/api/v1/intial');
    this.setState({ data: result.data.data });
  };

  openNotificationWithIcon = error => {
    notification.error({
      message: "we can't make filter process right now ",
      description: error.message,
      duration: 3,
    });
  };

  handleSubmit = async data => {
    try {
      const result = await axios.post('/api/v1/filter', { data: { ...data } });
      this.setState({ data: result.data.data });
    } catch (error) {
      this.openNotificationWithIcon(error);
    }
  };

  render() {
    const { data } = this.state;
    if (!data.length) return <Loader />;
    return (
      <div className="Filter-page__container">
        <h1 className="filter__title">Find approprate therapy: </h1>
        <FilterComponent handleSubmit={this.handleSubmit} />
        <hr className="filter__brack-line" />
        <h2 className="card__title">Therapists:</h2>
        <Card data={data} />
      </div>
    );
  }
}

export default Filter;
