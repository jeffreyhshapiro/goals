import  { createStore, combineReducers } from "redux";

const authReducer = function(state={}, action) {

    switch(action.type){
        case "AUTH_SIGN_IN":
        case "AUTH_VERIFY_AUTH":
            const authPayload = action.payload.user;
            const { user, goals } = authPayload;
            const { emailAddress, firstName, lastName } = user;

            state = {
                ...state,
                emailAddress,
                firstName,
                lastName,
                id: user._id,
                goals: goals
            }

            console.log(state)

            break;
        
        case "UPDATE_GOALS":
            const newGoal = action.payload;

            state = {
                ...state,
                goals: [
                    ...state.goals,
                    newGoal
                ]
            }

            break;

        case "ADD_FRIEND":
            const newFriend = action.payload;

            state = {
                ...state,
                goals: [
                    ...state.goals,
                    newGoal
                ]
            }

        default:
            return state;
    }

    return state;

}

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers)

export default store;