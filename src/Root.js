import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// const Play = lazy(() => import('./components/Play'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Camps = lazy(() => import('./pages/Camps'));
const Candidates = lazy(() => import('./components/candidates/CandidateTable'));
const Login = lazy(() => import('./components/Login/Login'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/candidates">
          <Candidates />
        </Route>
        <Route exact path="/camps">
          <Camps />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
