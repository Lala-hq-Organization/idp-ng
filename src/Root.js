import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

// const Play = lazy(() => import('./components/Play'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
