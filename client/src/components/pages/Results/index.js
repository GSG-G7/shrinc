import React from 'react';
import Data from './Data';
import './style.css';

const ResultsPage = () => {
  return (
    <div className="Results">
      <div className="Results__TherapyType">
        <h3 className="Results__TherapyType__title">Therapy Type</h3>
        <h4>{Data}</h4>
      </div>
      <div className="Results__TherapistsNames"></div>
    </div>
  );
};

export default ResultsPage;
