import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../common/Header';
import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
