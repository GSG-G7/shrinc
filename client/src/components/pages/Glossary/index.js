import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Input } from 'antd';

import glossaryData from './glossaryData.json';
import './style.css';

const { Search } = Input;

class Glossary extends Component {
  state = {
    searchValue: '',
    items: glossaryData,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.state;
    if (prevState.searchValue !== searchValue) this.filterItems(searchValue);
  }

  filterItems = searchValue => {
    let items = glossaryData.filter(item =>
      Object.keys(item)[0]
        .toLowerCase()
        .includes(searchValue)
    );

    if (!items.length && !searchValue) {
      items = glossaryData;
    }
    this.setState({
      items,
    });
  };

  handleChange = ({ target: { value } }) => {
    const searchValue = value.toLowerCase();
    this.setState({ searchValue });
  };

  renderItems = () => {
    const { items, searchValue } = this.state;

    if (searchValue && !items.length)
      return <h3>your search does not match any types</h3>;

    return items.map(item => {
      const term = Object.keys(item);
      const meaning = Object.values(item);

      return (
        <Fragment key={term}>
          <h3>{term}</h3>
          <div>
            <p className="glossary_content">{meaning}</p>
          </div>
        </Fragment>
      );
    });
  };

  render() {
    return (
      <section className="glossary_container">
        <Helmet>
          <title>Glossary</title>
        </Helmet>
        <h1>Glossary Page</h1>
        <Search
          placeholder="input search text"
          onChange={this.handleChange}
          style={{ width: 200 }}
        />
        {this.renderItems()}
      </section>
    );
  }
}

export default Glossary;
