import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BASE_NAME } from '../config';
import { Home, NotFound } from '../pages';

export default () => (
  <BrowserRouter basename={BASE_NAME}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
