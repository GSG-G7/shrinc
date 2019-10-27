import React from 'react';
import './style.css';
import table from '../../../assets/table.svg';

function glossary() {
  return (
    <div>
      <h1>Glossary</h1>
      <p>You can find Glossary of Therap here to know .</p>
      <img src={table} alt="table" />
    </div>
  );
}

export default glossary;
