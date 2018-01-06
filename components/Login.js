import React from 'react';
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Navbar from './Navbar';
import { signInUser } from '../utils/utils.js';

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
                <Grid style={width}>
                    <Row>
                        <FormGroup
                            controlId=""
                        >
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <FormControl
                                    name="emailAddress"
                                    type="email"
                                    value={this.state.emailAddress}
                                    placeholder="Email Address"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </Col>
                            <div style={{ marginTop: '10px' }}></div>
                        </FormGroup>
                        <FormGroup
                            controlId=""
                        >
                            <Col xs={12} sm={12} md={12} lg={12}
                                style={{ marginTop: '10px' }}
                            >
                                <FormControl
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button bsStyle="primary" onClick={this.completeSignIn.bind(this)}>Sign in</Button>
                        </Col>
                    </Row>
                    <div className="divider"></div>
                </Grid>
            </div>
        )
    }
}

export default Login;