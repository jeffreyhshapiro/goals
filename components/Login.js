import React from 'react';
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Navbar from './Navbar';
import LoginForm from './LoginForm.js';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            emailAddress: "",
            password: ""
        }
    }

    setFormValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    completeSignIn() {

        const { emailAddress, password } = this.state;

        if(!emailAddress || !password) {

            console.log('missing info');

        } else {
            signInUser(this.state);
        }

    }

    render() {

        const width = {
            width: '70%'
        }

        return (
            <div data-section="SignUp">
                <Navbar />
                <LoginForm />
            </div>
        )
    }
}

export default Login;