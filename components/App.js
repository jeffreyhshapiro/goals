import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Home from './Home.js'
import { isUserAuthenticated } from '../utils/utils.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }

    }

    componentWillMount() {
        isUserAuthenticated()
        .then((res) => {
            this.setState((state, prop) => {
                return {
                    user: res.user
                }
            })
        })
    }

    render() {
        return (
            <div data-section="App">
                <Grid>
                    <Navbar userInfo={this.state.user} />
                    <div id="main-app">
                        <Home />
                    </div>
                </Grid>
            </div>
        )
    }
}

export default App;