import React, { Component } from "react";
import { Panel, Col, Row } from 'react-bootstrap';
import Friend from './Friend.js'
import AddAFriend from './AddAFriend.js';

class DisplayGoal extends React.Component {

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
                <Panel>
                    <Row>
                    <Col xs={8} sm={8} md={8}>
                        <div>
                            { this.props.goal.goal }
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
                            this.props.goal.Friends.length > 0 
                            
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