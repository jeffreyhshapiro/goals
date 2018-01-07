import React from 'react';
import {Nav, NavItem, Grid, Col, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbar.scss';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)

        console.log("props", props)
    }

    render() {
        return (
            <div data-section="Navbar" style={{backgroundColor:'#f5f5f5'}}>
                <Nav bsStyle="pills" className="navbar">
                    <LinkContainer to="/">
                        <NavItem className="nav-item">Home</NavItem>
                    </LinkContainer>
                    <NavItem className="nav-item" href="javascript:void(0)">Goals</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Friends</NavItem>
                    {
                        this.props.userInfo

                        ?

                        <LinkContainer to="/">
                            <NavItem className="nav-item">Hey, {this.props.userInfo.firstName}!</NavItem>
                        </LinkContainer>

                        :

                        <LinkContainer to="/signup">
                            <NavItem className="nav-item">Sign Up</NavItem>
                        </LinkContainer>
                    }
                </Nav>
            </div>
        )
    }
}