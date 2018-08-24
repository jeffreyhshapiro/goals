import axios from 'axios';
import store from '../utils/store.js';

export function signUpUser(userInfo) {
    axios
        .post('/register', userInfo)
        .then((res) => {
            if(res.data.user) {
                window.location = "/";
            }
        })

}

export function signInUser(userInfo) {
    axios
        .post('/authenticate', userInfo)
        .then((res) => {
           
            if(res.data.err) {

                return store.dispatch({
                    type: "AUTH_ERR",
                    payload: res.data
                })

            } else {

                return store.dispatch({
                    type: "AUTH_SIGN_IN",
                    payload: res.data
                });
            }

        })
        .then((status) => {
            window.location = "/";
        })
        .catch((err) => {
            console.log("here", err)
        })

}

export function isUserAuthenticated() {

    return axios
    .get('/verifyAuth')
    .then((res) => {
        return store.dispatch({
            type: "AUTH_VERIFY_AUTH",
            payload: res.data
        }) 
    })
    .catch(err => err)
}

export function createNewGoal(goal) {
    return axios.post('/createGoal', goal) 
         .then((res) => {
             store.dispatch({
                 type: "UPDATE_GOALS",
                 payload: res.data
             })
         })
}

export function submitFriendForGoal(friend) {

    const { firstName, phoneNumber, goals } = friend;
    const submitFriend = {
        firstName,
        phoneNumber,
        goals
    }

    axios.post('/submitFriend', submitFriend)
        .then((res) => {
            store.dispatch({
                type: "ADD_FRIEND_TO_GOAL",
                payload: { ...res.data, goalIndex: friend['goalIndex'] }
            })
        })
}

export function logoutUser() {
    axios.get('/logout').then(res => {
        if(res.data.status === true) {
            window.location = "/";
        }
    })
}

export function getUsersExistingFriends() {
    axios.get('/friends').then(res => {
        store.dispatch({
            type: "GET_FRIENDS",
            payload: res.data
        })
    })
}
