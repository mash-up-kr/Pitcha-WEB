import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader/index';
import { Splash } from './splash';
import Result from './result';
import { Main } from './main';
import Detail from './detail';

const EntryRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" component={Main} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/splash" component={Splash} />
      <Route path="/result" component={Result} />
      <Route path="/" component={Splash} />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(EntryRoute);
