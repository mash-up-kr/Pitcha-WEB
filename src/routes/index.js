import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { Splash } from './splash';

export const EntryRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Splash} />
    </Switch>
  </BrowserRouter>
);
