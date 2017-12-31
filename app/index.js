import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from '../components/App';
import Login from '../components/Login'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
        </div>
    </Router>,
    document.getElementById('root')
)