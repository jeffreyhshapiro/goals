import axios from 'axios';
import store from '../utils/store.js';

console.log(store.getState().auth)


export function signUpUser(userInfo) {
    axios
        .post('/register', userInfo)
        .then((res) => {
            if (res.data.authSuccess) {
                window.location = "/"
            }
        })

}

export function signInUser(userInfo) {
    axios
        .post('/authenticate', userInfo)
        .then((res) => {
            return store.dispatch({
                type: "AUTH_SIGN_IN",
                payload: res.data
            });
        }).then(() => {
            window.location = "/"
        })
}

export function isUserAuthenticated() {

    return axios
    .get('/verifyAuth')
    .then((res) => {
        store.dispatch({
            type: "AUTH_VERIFY_AUTH",
            payload: res.data
        })
    })
    .catch(err => err)
}

export function createNewGoal(goal) {
    axios.post('/createGoal', goal)
         .then((res) => {
             store.dispatch({
                 type: "UPDATE_GOALS",
                 payload: res.data
             })
         })
}
