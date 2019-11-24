import React from "react";
import PropTypes from "prop-types";

import fullTypeName from "./staticData";
import "./style.css";

const FilterResult = ({ resultPoints }) => {
  const sortItems = Object.entries(resultPoints).sort(
    (prev, current) => current[1] - prev[1]
  );
  return (
    <div className="Results__TherapyType">
      <p className="Results__describtion">
        Here is how you scored for our the various types of therapy. Scores are
        relative to each other:
      </p>
      <ul className="result__list">
        {sortItems.map(([type, value]) => (
          <li key={type}>{`${fullTypeName[type]} : ${value}`}</li>
        ))}
      </ul>
    </div>
  );
};

FilterResult.propTypes = {
  resultPoints: PropTypes.shape({
    C: PropTypes.number,
    CBT: PropTypes.number,
    Hu: PropTypes.number,
    In: PropTypes.number,
    PD: PropTypes.number,
    STPD: PropTypes.number
  }).isRequired
};

export default FilterResult;
