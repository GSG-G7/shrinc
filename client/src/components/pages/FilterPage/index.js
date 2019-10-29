import React, { Component } from 'react';

import Cards from '../../common/Card';
import Filter from '../../common/Filter';
import usersData from '../../common/Card/staticDataTesting';
import './style.css';

console.log(usersData);
class FilterPage extends Component {
  state = {
    data: [1, 2],
  };

  componentDidMount = () => {
    console.log(11111111111);
    this.setState({ data: usersData });
  };

  render() {
    const { data } = this.state;
    console.log(2222, data);
    return (
      <div>
        <Filter />
        <Cards data={data} />
      </div>
    );
  }
}

export default FilterPage;
