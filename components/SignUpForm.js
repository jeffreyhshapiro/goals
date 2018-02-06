import React from 'react';
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { signUpUser } from '../utils/utils.js';
import '../styles/SignUp.scss';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            // goal: "",
            // step1: "",
            // step2: "",
            // step3: "",
            emailAddress: "",
            // friend1Name: "",
            // friend1PhoneNumber: "",
            // friend2Name: "",
            // friend2PhoneNumber: "",
            password: ""
        }
    }

    setFormValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    completeSignUp() {

        for (const k in this.state) {
            const inputField = document.querySelector(`[name=${k}]`);
            if (this.state[k] === "") {
                inputField.className += " validation-fail"
            } else {
                inputField.style.backgroundColor = "";
                inputField.classList.remove("validation-fail");
            }
        }

        const failedValidation = document.querySelectorAll(".validation-fail");

        if (failedValidation.length > 0) {

            Array.prototype.forEach.call(failedValidation, (node) => {
                node.style.backgroundColor = '#D03433';
            })

        } else {
            signUpUser(this.state)
        }

    }

    render() {

        const width = {
            width: '70%'
        }

        return (
            <div>
                <Grid style={width}>
                    <Row>
                        <FormGroup
                            controlId=""
                        >
                            <FormControl
                                name="firstName"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.setFormValue.bind(this)}
                            />
                        
                            <FormControl
                                name="lastName"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.setFormValue.bind(this)}
                            />
                        </FormGroup>
                    </Row>
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
                    <div className="divider"></div>
                </Grid>
                <Grid style={width}>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button bsStyle="primary" onClick={this.completeSignUp.bind(this)}>Sign up</Button>
                            <a href="/login" style={{ marginLeft: '10px' }}> Have an account?</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SignUpForm;