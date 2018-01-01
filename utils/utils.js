import axios from 'axios';

export function signUpUser() {
    console.log(this)
    axios
        .post('/register', this)
        .then((res) => {
            console.log(res)
        })

}
