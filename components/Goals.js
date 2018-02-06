import React, { Component } from "react";
import { connect } from 'react-redux';
import GoalEntryForm from './GoalEntryForm.js';
import DisplayGoal from './DisplayGoal.js'

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

                            this.props.user.goals.map((goal, i) => {
                                return <DisplayGoal goal={goal} key={i} goalIndex={i} />
                            })

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