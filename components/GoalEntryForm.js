import React, { Component } from "react";
import { Grid, Row, Col, FormControl, FormGroup, Button } from "react-bootstrap";
import { createNewGoal } from '../utils/utils.js';

class GoalEntryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goal: ""
        }
    }

    setFormValue(e) {
        this.setState({
            goal: e.target.value
        })
    }

    submitGoal() {
        const goal = this.state.goal;

        createNewGoal(goal)
    }

    render() {
        return (
            <div data-section="goal-entry-form">
                <div>You don't have any goals yet!</div>
                <Grid style={{width:"100%", padding:"20px"}}>
                    <Row>
                        <FormGroup
                            controlId=""
                        >
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <FormControl
                                    type="text"
                                    componentClass="textarea"
                                    name="goal"
                                    value={this.state.goal}
                                    placeholder="What is your goal?"
                                    onChange={this.setFormValue.bind(this)}
                                />
                                <div style={{display:'flex', alignItems:"center", justifyContent:"center", paddingTop: "10px"}}>
                                <Button bsStyle="primary" onClick={this.submitGoal.bind(this)}>Get Started</Button>
                                </div>
                            </Col>
                        </FormGroup>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default GoalEntryForm;