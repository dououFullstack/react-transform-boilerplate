import React from 'react';
import { render } from 'react-dom';
import  App  from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(<Router history={browserHistory}>{routes}</Router>
, document.getElementById('root'));
