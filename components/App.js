import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar.js'
import Home from './Home.js'
import { isUserAuthenticated } from '../utils/utils.js'

class App extends React.Component {
    constructor(props) {
        super(props)

        const self = this;

        this.state = {
            user: () => {
                return isUserAuthenticated().then(res => {
                    return res
                })
            }
        }

        isUserAuthenticated().then((res) => {

        })
    }

    // componentWillMount() {
    //     const user = ;

    //     user.then((res) => {
    //         this.setState({
    //             user: res
    //         }, () => {
    //             console.log(this.state.user)
    //         })
    //     });
    // }




    render() {
        return (
            <div data-section="App">
                <Grid>
                    <Navbar userInfo={this.state.user()} />
                    <div id="main-app">
                        <Home userInfo={this.state.user} />
                    </div>
                </Grid>
            </div>
        )
    }
}

export default App;