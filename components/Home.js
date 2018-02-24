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
                <div className="flexify">
                    <div>
                        <h1>Goals</h1>
                        <Goals />
                    </div> 
                </div>
            </div>
        )
    }
}

export default Home;