import React from 'react';
import { Helmet } from 'react-helmet';

import './style.css';
import table from '../../../assets/table.svg';

export default () => {
  return (
    <section>
      <Helmet>
        <title>Glossary</title>
      </Helmet>
      <h1 className="glossary_title">Glossary</h1>
      <p className="glossary_description">
        You can find Glossary of Therap here to know .
      </p>
      <img className="glossary_table" src={table} alt="table for information" />
    </section>
  );
};
