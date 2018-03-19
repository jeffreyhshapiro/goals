import React, { Component } from "react";
import { Panel, Col, Row } from 'react-bootstrap';
import moment from 'moment';
import Friend from './Friend.js'
import AddAFriend from './AddAFriend.js';

class DisplayGoal extends React.Component {

    formatDateTime(date) {
        if(!!date) {
            const dateTime = new Date(date);
    
            return moment(dateTime).format("MM-DD-YYYY");
        }
    }

    render() {

        const circleStyle = {
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            backgroundColor: this.props.goal.completed ? "green" : "red"
        }

        const displayLogic = {
            display: "flex",
            justifyContent: "center"
        }

        return (
            <div className="render-goal">
                <Panel bsStyle="primary" style={{minWidth:'500px'}}>
                    <Row>
                    <Col xs={8} sm={8} md={8}>
                        <div>
                            { this.props.goal.goal }
                        </div>
                        <br />
                        <div>
                            {
                                this.props.goal.deadline 

                                ?

                                <div> Check in on: {this.formatDateTime(this.props.goal.deadline)} </div>

                                :

                                ""
                            }
                        </div>
                    </Col>
                    <Col xs={4} sm={4} md={4}>
                        <div style={ displayLogic }>
                        <div style={ circleStyle }></div>
                        </div>
                    </Col>

                    </Row>
                    <div>
                        {
                            this.props.goal.Friends && this.props.goal.Friends.length > 0 
                            
                            ?

                            
                            <div>
                                <p>Who's helping you stay on track?</p>
                                {
                                    this.props.goal.Friends.map((friend, i) => {
                                        return < Friend key={i} friend={friend} />
                                    })
                                }
                            </div>

                            :

                            <AddAFriend goalIndex={this.props.goalIndex} />
                        }
                    </div>
                </Panel>

                <hr />
            </div>
        )
    }

}

export default DisplayGoal