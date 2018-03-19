import React, { Component } from "react";
import { FormControl, FormGroup, Button, Row, Col } from 'react-bootstrap';
import { submitFriendForGoal, getUsersExistingFriends } from '../utils/utils.js';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.auth
    }
})
class AddAFriend extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            firstName: "",
            phoneNumber: ""
        }
    }

    componentWillMount() {
        getUsersExistingFriends();
    }

    handleShow() {
        this.setState({
            show: !this.state.show
        })
    }

    setFriendData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitFriend(e) {
        const {firstName, phoneNumber} = this.state;
        const { goals } = this.props.user;
        const goalIndex = this.props.goalIndex;
        const goalsInfo = goals[goalIndex];

        submitFriendForGoal({
            firstName,
            phoneNumber,
            goals: goalsInfo,
            goalIndex
        });
    }

    render() {

        return (
            <div className="add-a-friend" style={{paddingTop: '10px'}}>
                <a href="javscript:void(0)" onClick={this.handleShow.bind(this)}> Add a friend </a>

                <div className="add-a-friend-form"
                     style={ !!this.state.show ? {display:"flex", flexDirection: "column"} : {display: "none"}}
                >
                        <FormGroup
                            controlId=""
                        >
                                <FormControl
                                    name="firstName"
                                    value={this.state.firstName}
                                    placeholder="First Name"
                                    onChange={this.setFriendData.bind(this)}
                                />
                                <FormControl
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    placeholder="Phone Number"
                                    onChange={this.setFriendData.bind(this)}
                                />
                        </FormGroup>

                        <Button bsStyle="success" onClick={this.submitFriend.bind(this)}>Done</Button>
                </div>

            </div>

        )
    }

}

export default AddAFriend