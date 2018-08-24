import React, { Component } from "react";
import { connect } from 'react-redux';
import GoalEntryForm from './GoalEntryForm.js';
import DisplayGoal from './DisplayGoal.js'
import moment from 'moment';

@connect((store) => {
    return {
        user: store.auth
    }
})
class Goal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render(){
        return(
            <div data-section="goals">
                {
                    this.props.user.goals 

                    ?

                        this.props.user.goals.length > 0
                        
                        ?
                            <div>
                                {
                                    this.props.user.goals.map((goal, i) => {
                                        return <DisplayGoal goal={goal} key={i} goalIndex={i} />
                                    })
                                }

                                <br />
                                
                                <GoalEntryForm cta="Add Another Goal" />

                            </div>
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