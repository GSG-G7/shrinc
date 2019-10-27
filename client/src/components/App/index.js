import React from 'react';

import 'antd/dist/antd.css';
import './style.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../common/Header';

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
