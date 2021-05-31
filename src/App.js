import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
