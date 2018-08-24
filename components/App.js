import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Home from './Home.js'
import SignUpForm from './SignUpForm.js'
import LoadingSpinner from './LoadingSpinner.js'
import { isUserAuthenticated } from '../utils/utils.js'
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.auth
    }
})
class App extends React.Component {

    constructor() {
        super();

        this.state = {
            hideSpinner: false,
            hideApp: true
        }
    }

    
    componentWillMount() {
        isUserAuthenticated().then((res) => {
            this.setState({
                hideSpinner: true,
                hideApp: false 
            })
        })
    }
    
    render() {
        return (
            <div data-section="App">
                <div className="app-main" style={{
                    display: this.state.hideApp ? "none" : "block"
                }}>
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
                <LoadingSpinner hideSpinner={this.state.hideSpinner} />
            </div>
        )
    }
}

export default App;