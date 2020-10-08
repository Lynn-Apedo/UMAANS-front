import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import AddProject from "./Pages/AddProject";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/projects">
        <AddProject />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
