import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from '../components/App';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import { isUserAuthenticated } from '../utils/utils.js';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/"  component={App} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root')
)