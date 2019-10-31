import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TherapyType from '../pages/TherapyType';
import NotFound from '../pages/NotFound';
import Glossary from '../pages/Glossary';
import Profile from '../pages/Profile';
import Header from '../common/Header';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Home from '../pages/Home';
import 'antd/dist/antd.css';
import './style.css';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/About" component={About} />
          <Route path="/glossary" component={Glossary} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route path="/types" component={TherapyType} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
