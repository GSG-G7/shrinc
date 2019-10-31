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
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/glossary">
            <Glossary />
          </Route>

          <Route exact path="/profile/:id">
            {props => <Profile {...props} />}
          </Route>

          <Route exact path="/types">
            <TherapyType />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
export default App;
