import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Goals from './Goals.js';
import Navbar from './Home.js';
import { retrieveGoals } from "../utils/utils.js";
import "../styles/Home.scss"

class Home extends React.Component {
    render() {
        return (
            <div data-section="Home">
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6} className="flexify">
                        <div>
                            <h1>Goals</h1>
                            <Goals />
                        </div>

                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} className="flexify">Friends</Col>
                </Row>
            </div>
        )
    }
}

export default Home;