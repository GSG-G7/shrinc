import React, { Component } from 'react';

import axios from 'axios';
import Cards from '../../common/Card';
import Filter from '../../common/Filter';
import usersData from '../../common/Card/staticDataTesting';
import './style.css';

class FilterPage extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.setState({ data: usersData });
  };

  handleSubmit = async data => {
    try {
      const result = await axios.post('/api/v1/filter', { data: { ...data } });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="Filter-page__container">
        <Filter handleSubmit={this.handleSubmit} />
        <Cards data={data} />
      </div>
    );
  }
}

export default FilterPage;
