import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { urls } from "./util/urlUtils";

import './index.css';

import App from './containers/App/App';

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App} />
    </Router>, document.getElementById('root'));

