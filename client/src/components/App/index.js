import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../common/Header';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Glossary from '../pages/Glossary';
import Profile from '../pages/Profile';
import TherapyType from '../pages/TherapyType';

import 'antd/dist/antd.css';
import './style.css';

class App extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    auth: null,
  };

  render() {
    return (
      <>
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

            <Route exact path="/profile/:name">
              {props => <Profile {...props} />}
            </Route>

            <Route exact path="/types">
              <TherapyType />
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}
export default App;
