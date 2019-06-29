import React from 'react';
import ReactDOM from 'react-dom';
import './util/normalize.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import EntryRoute from './presentation/routes';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <EntryRoute />
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
