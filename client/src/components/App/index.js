import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
} from '../pages';
import 'antd/dist/antd.css';
import './style.css';

export default () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result" component={Results} />
          <Route path="/signup" component={Signup} />
          <Route path="/About" component={About} />
          <Route path="/glossary" component={Glossary} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/types" component={TherapyType} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
