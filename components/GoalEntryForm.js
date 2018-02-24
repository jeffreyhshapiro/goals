import React, { Component } from "react";
import { Grid, Row, Col, FormControl, FormGroup, Button } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { createNewGoal } from '../utils/utils.js';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.auth
    }
})
class GoalEntryForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goal: "",
            deadline: moment()
        }
    }

    setFormValue(e) {
        this.setState({
            goal: e.target.value
        })
    }

    setDate(date) {
        this.setState({
            deadline: moment(date)
        });
    }


    submitGoal() {
        const { goal, deadline } = this.state;

        const goalInfo = {
            goal,
            deadline: deadline.format("MM-DD-YYYY"),
            userId: this.props.user.id
        }

        createNewGoal(goalInfo)
    }

    render() {
        return (
            <div data-section="goal-entry-form">
                
                {
                    this.props.cta

                    ?

                    <div>Any other goals you have in mind?</div>

                    :

                    <div>You don't have any goals yet!</div>
                }
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

                                <small>Deadline to complete your goal:</small>
                                <DatePicker 
                                    name="deadline"
                                    selected={this.state.deadline}
                                    onChange={this.setDate.bind(this)}
                                />
                                <div style={{display:'flex', alignItems:"center", justifyContent:"center", paddingTop: "10px"}}>
                                <Button bsStyle="primary" onClick={this.submitGoal.bind(this)}>
                                {
                                    this.props.cta

                                    ?
                                    
                                    this.props.cta

                                    :

                                    "Get Started"
                                }
                                </Button>
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