import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TherapyType from '../pages/TherapyType';
import Glossary from '../pages/Glossary';
import Profile from '../pages/Profile';
import Header from '../common/Header';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Home from '../pages/Home';

import 'antd/dist/antd.css';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/About" component={About} />
          <Route exact path="/glossary" component={Glossary} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/types" component={TherapyType} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
export default App;
