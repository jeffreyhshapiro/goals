import React from 'react';
import {Nav, NavItem, Grid, Col, Row} from 'react-bootstrap';
import '../styles/Navbar.scss';

export default class Navbar extends React.Component {

    render() {
        return (
            <div data-section="Navbar">
                <Nav bsStyle="pills" className="navbar">
                    <NavItem className="nav-item" href="javascript:void(0)">Accountability</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Goals</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Friends</NavItem>
                </Nav>
            </div>
        )
    }
}