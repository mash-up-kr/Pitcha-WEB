import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/index';
import { Splash } from './splash';
import Result from './result';
import { Main } from './main';

const EntryRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/splash" component={Splash} />
      <Route path="/result" component={Result} />
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(EntryRoute);
