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
    constructor() {
        super();

        this.state = {
            pastDueGoals:[],
            currentGoals:[]
        }

    }

    componentDidMount() {
        this.organizeGoalsByDate()
    }

    organizeGoalsByDate() {

        const pastDueGoals = [];
        const currentGoals = [];

        this.props.user.goals.forEach((goal, i) => {
            let deadlineIsBeforeNow = moment(goal.deadline).isBefore(moment.now());

            

            if ( deadlineIsBeforeNow ) {
                pastDueGoals.push(goal);
            } else {
                currentGoals.push(goal);
            }
        })

        this.setState({
            pastDueGoals: [ ...this.state.pastDueGoals, ...pastDueGoals ],
            currentGoals: [ ...this.state.currentGoals, ...currentGoals ]
        })
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

                                <h1>Current Goals</h1>
                                {
                                    this.state.currentGoals.map((goal, i) => {
                                        return <DisplayGoal goal={goal} key={i} goalIndex={i} />
                                    })
                                }

                                <h1>Past Goals</h1>

                                {
                                    this.state.pastDueGoals.map((goal, i) => {
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