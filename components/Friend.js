import React, { Component } from "react";
import { Panel, Col, Row } from 'react-bootstrap';

class Friend extends React.Component {

    render() {
        return (
            <div className="friend">
               {this.props.friend.firstName}
            </div>
        )
    }

}

export default Friend