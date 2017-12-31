import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from './Home.js'
import "../styles/Home.scss"

class Home extends React.Component {
    render() {
        return (
            <div data-section="Home">
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>Active Goals</Col>
                    <Col xs={6} sm={6} md={6} lg={6}>Friends</Col>
                </Row>
            </div>
        )
    }
}

export default Home;