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

            break;
        
        case "UPDATE_GOALS":
            console.log('hello')
            break;
    }

    return state;

}

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers)

export default store;