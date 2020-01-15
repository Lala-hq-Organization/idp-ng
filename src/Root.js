import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

// const Play = lazy(() => import('./components/Play'));
const Layout = lazy(() => import("./components/layout/Layout"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
