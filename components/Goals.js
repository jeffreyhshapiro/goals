import React, { Component } from "react";
import { connect } from 'react-redux';
import GoalEntryForm from './GoalEntryForm.js';

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

                        <GoalEntryForm />

                    :

                    ""
                }
            </div>
        )
    }
}

export default Goal;