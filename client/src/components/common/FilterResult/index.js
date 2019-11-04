import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const fullTypeName = {
  CBT: 'Cognitive Behavioural Therapy',
  PD: 'Psychodynamic Therapy',
  Hu: 'Humanistic psychotherapy',
  In: 'ntegrative psychotherapy',
  C: 'Counselling',
  STPD: 'Short Term Psychodynamic Psychotherapy',
};
const FilterResult = props => {
  const { resultPoints } = props;
  return (
    <div className="Results__TherapyType">
      <h3 className="Results__TherapyType__title">Therapy Type</h3>
      <ul className="result__list">
        {Object.keys(resultPoints).map(type => (
          <li
            key={type}
          >{`${fullTypeName[type]}( ${type} ) : ${resultPoints[type]}`}</li>
        ))}
      </ul>
    </div>
  );
};

FilterResult.defaultProps = {
  resultPoints: PropTypes.shape(PropTypes.objectOf({})),
};

FilterResult.propTypes = {
  resultPoints: PropTypes.shape(),
};

export default FilterResult;
