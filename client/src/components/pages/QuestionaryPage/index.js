import React from 'react';

import Questionary from '../../common/Questionary';
import './style.css';

const QuestionaryPage = () => (
  <div className="questionary__container">
    <h1 className="questionary__title">Questionnaire description</h1>
    <Questionary />;
  </div>
);

export default QuestionaryPage;
