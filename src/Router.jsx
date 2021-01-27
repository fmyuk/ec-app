import React from "react";
import { Switch, Route } from "react-router";
import { LoginComponent } from "./containers";
import { Login, Home } from "./templates";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/logcom"} component={LoginComponent} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
}

export default Router;
