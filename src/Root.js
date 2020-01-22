import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import ProtectedRoutes from './components/protectedRoutes/';

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
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoutes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/candidates">
            <Candidates />
          </Route>
          <Route exact path="/camps">
            <Camps />
          </Route>
          <Route exact path="/camps/:state">
            <Camps />
          </Route>
        </ProtectedRoutes>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
