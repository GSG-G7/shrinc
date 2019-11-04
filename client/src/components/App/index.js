import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  TherapyType,
  NotFound,
  Glossary,
  Profile,
  Header,
  Signup,
  About,
  Home,
  Results,
  FilterPage,
} from '../pages';
import 'antd/dist/antd.css';
import './style.css';
import Qustionnarie from '../pages/QuestionaryPage';

export default () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="container">
        <Helmet>
          <title>Shrinc</title>
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result" component={Results} />
          <Route path="/signup" component={Signup} />
          <Route path="/About" component={About} />
          <Route path="/glossary" component={Glossary} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/types" component={TherapyType} />
          <Route path="/filter" component={FilterPage} />
          <Route path="/questionnaire" component={Qustionnarie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
