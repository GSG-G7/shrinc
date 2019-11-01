import React, { Component } from 'react';

import Questionary from '../../common/Questionary';
import './style.css';

class QuestionaryPage extends Component {
  state = {};

  render() {
    return (
      <div className="questionary__container">
        <h1 className="questionary__title">Questionnaire description</h1>
        <Questionary />;
      </div>
    );
  }
}

export default QuestionaryPage;
