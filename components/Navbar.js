import React from 'react';
import {Nav, NavItem, Grid, Col, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import '../styles/Navbar.scss';

@connect((store) => {
    return { 
        user: store.auth
    }
})

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)

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
                        this.props.userInfo && Object.keys(this.props.user.length > 0)

                        ?

                        <NavItem className="nav-item">Hey, {this.props.user.firstName}!</NavItem>

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