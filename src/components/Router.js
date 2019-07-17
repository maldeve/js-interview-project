import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import User from "./User";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
