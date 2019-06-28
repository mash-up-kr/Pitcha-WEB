import React from 'react';
import ReactDOM from 'react-dom';
import './util/normalize.scss';
import * as serviceWorker from './serviceWorker';
import { EntryRoute } from './routes';

ReactDOM.render(<EntryRoute />, document.getElementById('root'));
serviceWorker.unregister();
