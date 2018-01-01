import axios from 'axios';

export function signUpUser(userInfo) {
    axios
        .post('/register', userInfo)
        .then((res) => {
            console.log(res)
        })

}
