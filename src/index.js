import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './util/normalize.scss';
import EntryRoute from './routes';
import * as serviceWorker from './serviceWorker';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools);

ReactDOM.render(<EntryRoute />, document.getElementById('root'));
serviceWorker.unregister();
