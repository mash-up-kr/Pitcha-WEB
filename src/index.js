import React from 'react';
import ReactDOM from 'react-dom';
import './util/normalize.scss';
import EntryRoute from './presentation/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EntryRoute />, document.getElementById('root'));
serviceWorker.unregister();
