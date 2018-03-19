import React from 'react';
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { signInUser } from '../utils/utils.js';
import '../styles/Login.scss';

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

        if (!emailAddress || !password) {

            console.log('missing info');

        } else {
            signInUser(this.state);
        }

    }

    render() {

        const width = {
            // width: '70%'
        }

        return (
            <Grid style={width}>
                <Row>
                    <FormGroup
                        controlId=""
                    >
                            <FormControl
                                name="emailAddress"
                                type="email"
                                value={this.state.emailAddress}
                                placeholder="Email Address"
                                onChange={this.setFormValue.bind(this)}
                            />
                        <div style={{ marginTop: '10px' }}></div>
                    </FormGroup>
                    <FormGroup
                        controlId=""
                    >
                            <FormControl
                                name="password"
                                type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.setFormValue.bind(this)}
                            />
                    </FormGroup>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button bsStyle="primary" onClick={this.completeSignIn.bind(this)}>Sign in</Button>
                    </Col>
                </Row>
                <div className="divider"></div>
            </Grid>
        )
    }
}

export default Login;