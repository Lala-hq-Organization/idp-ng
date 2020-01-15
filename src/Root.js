import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";

const Play = lazy(() => import("./components/Play"));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route>
          <Play />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
