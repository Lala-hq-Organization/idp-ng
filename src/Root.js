import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// const Play = lazy(() => import('./components/Play'));
const Layout = lazy(() => import('./components/layout/Layout'));
const Candidates = lazy(() => import('./components/candidates/CandidateTable'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route path="/candidates">
          <Candidates />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
