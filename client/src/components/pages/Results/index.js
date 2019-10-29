import React from 'react';
import Card from '../../common/Card';

import './style.css';

const ResultsPage = data => {
  return (
    <div className="Results">
      <div className="Results__TherapyType">
        <h3 className="Results__TherapyType__title">Therapy Type</h3>
        <h4 className="Results__TherapyType__name">{data}</h4>
      </div>
      <div className="Results__TherapistsNames">
        <h3 className="Results__TherapistsNames_suggest">
          According to your answers, we would suggest that you search for
          therapists specializing in:
        </h3>
        <div className="Results__TherapistsNames__Cards">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
