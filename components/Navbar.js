import React from 'react';
import {Nav, NavItem, Grid, Col, Row, DropdownButton, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../utils/utils.js';
import '../styles/Navbar.scss';

@connect((store) => {
    return { 
        user: store.auth
    }
})
export default class Navbar extends React.Component {

    logoutUser() {
        logoutUser();
    }

    render() {
        return (
            <div data-section="Navbar" style={{backgroundColor:'#f5f5f5'}}>
                <Nav bsStyle="pills" className="navbar">
                    <LinkContainer to="javascript:void(0)"> 
                        <NavItem className="nav-item">account<span style={{fontWeight:"bold"}}>able</span></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem className="nav-item">Home</NavItem>
                    </LinkContainer>
                    <NavItem className="nav-item" href="javascript:void(0)">Goals</NavItem>
                    <NavItem className="nav-item" href="javascript:void(0)">Friends</NavItem>
                    {
                        this.props.user && Object.keys(this.props.user).length > 0

                        ?

                            <DropdownButton 
                                className="nav-item"
                                title={"Hey, " + this.props.user.firstName + "!"}
                                style={{backgroundColor:"transparent"}}
                                id="nav-dropdown"
                            >
                                <MenuItem eventKey="1" onClick={this.logoutUser.bind(this)}>Logout</MenuItem>
                            </DropdownButton>

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