import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// const Play = lazy(() => import('./components/Play'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Candidates = lazy(() => import('./components/candidates/CandidateTable'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/candidates">
          <Candidates />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
