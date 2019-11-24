import React from "react";

import { Questionnaire } from "../../common";
import "./style.css";

const QuestionaryPage = () => (
  <div className="questionary__container">
    <h1 className="questionary__title">Questionnaire</h1>
    <Questionnaire />
  </div>
);

export default QuestionaryPage;
