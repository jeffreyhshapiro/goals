import React, { Component } from "react";
import { connect } from 'react-redux';

@connect((store) => {
    return {
        user: store.auth
    }
})
class Goal extends React.Component {
    render(){
        return(
            <div data-section="goals">
                {
                    this.props.user.goals 

                    ?

                        this.props.user.goals.length > 0
                        
                        ?

                        <div> Here are your goals </div>

                        :

                        <div> You need some goals </div>

                    :

                    ""
                }
            </div>
        )
    }
}

export default Goal;