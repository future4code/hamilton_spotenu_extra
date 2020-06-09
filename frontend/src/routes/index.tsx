import React from "react";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const routes = {
  login: "/login",
  signUp: "/signUp",
};

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
