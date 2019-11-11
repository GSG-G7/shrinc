import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Loader } from '../common';
import 'antd/dist/antd.css';
import './style.css';

const Qustionnarie = lazy(() => import('../pages/QuestionaryPage'));
const TherapyType = lazy(() => import('../pages/TherapyType'));
const Filter = lazy(() => import('../pages/FilterPage'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Glossary = lazy(() => import('../pages/Glossary'));
const Profile = lazy(() => import('../pages/Profile'));
const Results = lazy(() => import('../pages/Results'));
const Header = lazy(() => import('../common/Header'));
const Signup = lazy(() => import('../pages/Signup'));
const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));

export default () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader className="loader" />}>
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
            <Route path="/filter" component={Filter} />
            <Route path="/questionnaire" component={Qustionnarie} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Suspense>
    </BrowserRouter>
  );
};
