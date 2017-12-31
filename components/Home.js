import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.js'

class Home extends React.Component {
    render() {
        return (
            <div data-section="Home">
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4}>This</Col>
                    <Col xs={4} sm={4} md={4} lg={4}>Is</Col>
                    <Col xs={4} sm={4} md={4} lg={4}>A Test</Col>
                </Row>
            </div>
        )
    }
}

export default Home;