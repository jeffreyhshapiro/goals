import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Home from './Home.js'

class App extends React.Component {
    render() {
        return (
            <div data-section="App">
                <Grid>
                    <Navbar />
                    <div id="main-app">
                        <Home />
                    </div>
                </Grid>
            </div>
        )
    }
}

export default App;