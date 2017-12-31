import React from 'react';
import {Nav, NavItem, Grid, Col, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbar.scss';

export default class Navbar extends React.Component {

    render() {
        return (
            <div data-section="Navbar">
                <Nav bsStyle="pills" className="navbar">
                    {/* <LinkContainer> */}
                        <NavItem className="nav-item">Accountability</NavItem>
                    {/* </LinkContainer> */}
                    <NavItem className="nav-item" href="javascript:void(0)">Goals</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Friends</NavItem>
                    <LinkContainer to="/login">
                        <NavItem className="nav-item">Login</NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        )
    }
}