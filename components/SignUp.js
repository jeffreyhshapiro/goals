import React from 'react';
import { Grid, Col, Row, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Navbar from './Navbar';
import { signUpUser } from '../utils/utils.js';
import '../styles/SignUp.scss';

class SignUp extends React.Component {
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

        for(const k in this.state) {
            const inputField = document.querySelector(`[name=${k}]`);
            if(this.state[k] === "") {
                inputField.className += " validation-fail"
            } else {
                inputField.style.backgroundColor = "";
                inputField.classList.remove("validation-fail");
            }
        }

        const failedValidation = document.querySelectorAll(".validation-fail");

        if(failedValidation.length > 0) {

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
            <div data-section="SignUp">
                <Navbar />
                <Grid style={width}>
                    <Row>
                        <FormGroup
                            controlId=""
                        >
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormControl
                                name="firstName"
                                value={this.state.firstName}
                                placeholder="First Name"
                                onChange={this.setFormValue.bind(this)}
                            />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormControl
                                name="lastName"
                                value={this.state.lastName}
                                placeholder="Last Name"
                                onChange={this.setFormValue.bind(this)}
                            />
                        </Col>
                        </FormGroup>
                    </Row>
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
                    <div className="divider"></div>
                </Grid>
                {/* <Grid style={width}>
                    <Row>
                        <FormGroup>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <FormControl
                                    name="goal"
                                    value={this.state.goal}
                                    placeholder="Goal"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <div style={{ marginTop: '10px' }}></div>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <FormControl
                                    name="step1"
                                    value={this.state.step1}
                                    placeholder="First Step"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <FormControl
                                    name="step2"
                                    value={this.state.step2}
                                    placeholder="Second Step"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <div style={{ marginTop: '10px' }}></div>
                                    <FormControl
                                        name="step3"
                                        value={this.state.step3}
                                        placeholder="Third Step"
                                        onChange={this.setFormValue.bind(this)}
                                    />
                            </Col>
                        </FormGroup>
                    </Row>
                    <div className="divider"></div>
                </Grid>
                <Grid style={width}>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormGroup>
                                <FormControl 
                                    name="friend1Name"
                                    value={this.state.friend1Name}
                                    placeholder="First Friend Name"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormGroup>
                                <FormControl
                                    name="friend1PhoneNumber"
                                    value={this.state.friend1PhoneNumber}
                                    placeholder="First Friend Number"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormGroup>
                                <FormControl
                                    name="friend2Name"
                                    value={this.state.friend2Name}
                                    placeholder="Second Friend Name"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <FormGroup>
                                <FormControl
                                    name="friend2PhoneNumber"
                                    value={this.state.friend2PhoneNumber}
                                    placeholder="Second Friend Number"
                                    onChange={this.setFormValue.bind(this)}
                                />
                            </FormGroup>
                        </Col>
                    </Row> */}

                <Grid style={width}>
                    <Row>
                        <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Button bsStyle="primary" onClick={this.completeSignUp.bind(this)}>Sign up</Button>
                            <a href="/login" style={{marginLeft:'10px'}}> Have an account?</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default SignUp;