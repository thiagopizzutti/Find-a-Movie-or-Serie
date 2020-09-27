import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:id" component={Details} />
  </Switch>
);

export default Routes;
