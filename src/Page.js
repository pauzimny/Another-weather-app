import React from "react";
import { Route, Switch } from "react-router-dom";
import Settings from "./pages/Settings.js";
import Error from "./pages/Error.js";
import HomePage from "./pages/HomePage.js";
import Details from "./pages/Details.js";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/settings" component={Settings} />
        <Route path="/details" component={Details} />
        <Route exact component={Error} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
