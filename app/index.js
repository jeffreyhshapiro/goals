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
import { Provider } from 'react-redux';
import store from '../utils/store.js';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/"  component={App} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)