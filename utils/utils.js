import axios from 'axios';
import store from './store'

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
            console.log(res)
            store.dispatch({
                type: "AUTH_SIGN_IN",
                payload: res.data
            })
        })
}

export function isUserAuthenticated() {

    return axios
    .get('/verifyAuth')
    .then(res => {
        store.dispatch({
            type: "AUTH_VERIFY_AUTH",
            payload: res.data
        })
    })
    .catch(err => err)

}
