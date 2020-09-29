import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Error404 from '../components/Error404';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:id" component={Details} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;
