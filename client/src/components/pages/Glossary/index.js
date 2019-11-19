import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Input } from 'antd';

import glossaryData from './glossaryData.json';
import './style.css';

const { Search } = Input;

class Glossary extends Component {
  state = {
    searchValue: '',
    items: [],
  };

  onChange = v => {
    const searchValue = v.target.value.toUpperCase();
    const items = glossaryData.filter(item =>
      Object.keys(item)[0]
        .toLowerCase()
        .includes(searchValue)
    );
    this.setState({ items, searchValue });
  };

  render() {
    const { items: currentItems, searchValue } = this.state;
    const items = currentItems.length ? currentItems : glossaryData;
    return (
      <section className="glossary_container">
        <Helmet>
          <title>Glossary</title>
        </Helmet>
        <h1>Glossary Page</h1>
        <Search
          placeholder="input search text"
          onChange={this.onChange}
          style={{ width: 200 }}
        />
        {searchValue && !currentItems.length ? (
          <h3>your search does not match any types</h3>
        ) : (
          items.map(item => {
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
          })
        )}
      </section>
    );
  }
}

export default Glossary;
