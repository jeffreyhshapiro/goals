import  { createStore, combineReducers } from "redux";

const authReducer = function(state={}, action) {
    switch(action.type){
        case "AUTH_SIGN_IN": 
        case "AUTH_VERIFY_AUTH":
            const authPayload = action.payload.user;
            console.log(authPayload)
            const { emailAddress, firstName, lastName } = authPayload;

            return state = {
                ...state,
                emailAddress,
                firstName,
                lastName,
                id: authPayload._id
            }

            break;
    }

    return state;

}

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers)

export default store;