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

  handleSubmit = data => {
    console.log('hello from filter page', data);
    axios
      .post('url', data)
      .then(console.log)
      .catch(console.log);
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Filter handleSubmit={this.handleSubmit} />
        <Cards data={data} />
      </div>
    );
  }
}

export default FilterPage;
