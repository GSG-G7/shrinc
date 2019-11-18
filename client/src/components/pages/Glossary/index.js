import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import glossaryData from './glossaryData.json';
import './style.css';

export default () => {
  return (
    <section className="glossary_container">
      <Helmet>
        <title>Glossary</title>
      </Helmet>
      <h1>Glossary</h1>
      {glossaryData.map(item => {
        return (
          <Fragment key={Object.keys(item)}>
            <h3>{Object.keys(item)}</h3>
            <div>
              <p className="glossary_content">{Object.values(item)}</p>
            </div>
          </Fragment>
        );
      })}
    </section>
  );
};
