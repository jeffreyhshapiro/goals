import React from 'react';
import Navbar from './Navbar';
import SignUpForm from './SignUpForm.js'
import '../styles/SignUp.scss';

class SignUp extends React.Component {

    render() {

        const width = {
            width: '70%'
        }

        return (
            <div data-section="SignUp">
                <Navbar />
                <SignUpForm />
            </div>
        )
    }
}

export default SignUp;