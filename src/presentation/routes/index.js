import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/index';
import { Splash } from './splash';

const EntryRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Splash} />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(EntryRoute);
