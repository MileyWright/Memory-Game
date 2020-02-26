import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route} from 'react-router-dom';
import './fonts/gotnoheart.ttf'
ReactDOM.render(
<Route>
    <App />
</Route>
, document.getElementById('root'));

serviceWorker.unregister();
