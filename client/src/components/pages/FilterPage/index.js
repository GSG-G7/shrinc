import React, { Component } from 'react';

import axios from 'axios';
import { notification } from 'antd';

import Cards from '../../common/Card';
import Filter from '../../common/Filter';
import './style.css';

class FilterPage extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const result = await axios.get('/api/v1/intial');
    this.setState(
      prevState => ({ ...prevState, data: result.data.data }),
      () => console.log(this.state)
    );
  };

  openNotificationWithIcon = error => {
    notification.error({
      message: 'somthing wrong !!',
      description: error.message,
      duration: 3,
    });
  };

  handleSubmit = async data => {
    try {
      const result = await axios.post('/api/v1/filter', { data: { ...data } });
      this.setState(prevState => ({ ...prevState, data: result.data.data }));
    } catch (error) {
      this.openNotificationWithIcon(error);
    }
  };

  render() {
    const { data } = this.state;
    if (!data.length) return <h3>Loding...</h3>;
    return (
      <div className="Filter-page__container">
        <h1 className="filter__title">Find approprate therapy: </h1>
        <Filter handleSubmit={this.handleSubmit} />
        <hr className="filter__brack-line" />
        <h2 className="card__title">Therapists:</h2>
        <Cards data={data} />
      </div>
    );
  }
}

export default FilterPage;
