import React from 'react';
import {Nav, NavItem, Grid, Col, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbar.scss';

export default class Navbar extends React.Component {

    render() {
        return (
            <div data-section="Navbar">
                <Nav bsStyle="pills" className="navbar">
                    <LinkContainer to="/">
                        <NavItem className="nav-item">Home</NavItem>
                    </LinkContainer>
                    <NavItem className="nav-item" href="javascript:void(0)">Goals</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Friends</NavItem>
                    <LinkContainer to="/signup">
                        <NavItem className="nav-item">Sign Up</NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        )
    }
}