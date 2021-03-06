import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Home from './Home.js'
import SignUpForm from './SignUpForm.js'
import { isUserAuthenticated } from '../utils/utils.js'
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.auth
    }
})
class App extends React.Component {

    componentWillMount() {
        isUserAuthenticated();
    }

    render() {
        return (
            <div data-section="App">
                <Grid>
                    <Navbar />
                    <div id="main-app">
                        {
                            Object.keys(this.props.user).length > 0

                            ?

                            <Home />

                            :

                            <div>
                                <p style={{textAlign: 'center'}}>Are you ready to crush some goals?</p>
                                <SignUpForm />
                            </div>
                        }
                    </div>
                </Grid>
            </div>
        )
    }
}

export default App;