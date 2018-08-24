import React, { Component } from "react";
import { connect } from 'react-redux';
import '../styles/LoadingSpinner.scss';

@connect((store) => {
    return {
        user: store.auth
    }
})
class LoadingSpinner extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (
            <div style={{ 
                height: "100vh",
                width: "100vw",
                backgroundColor: "#D7D7D7",
                position: "relative",
                display: this.props.hideSpinner ? "none" : "block"
             }}>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}

export default LoadingSpinner;