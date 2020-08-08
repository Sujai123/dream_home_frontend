import React from 'react';
import { Route, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';
// import {} from ""

import HomesList from "../components/HomesList";

function IndexRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomesList} />
      </Switch>
    </Router>
  )
}

export default IndexRouter;
