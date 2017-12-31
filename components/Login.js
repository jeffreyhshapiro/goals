import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';

class Login extends React.Component {

    formValue(e) {
        console.log(e);
    }

    render() {
        return (
            <div data-section="Login">
                <FormGroup
                    controlId="formBasicText"
                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value="test"
                        placeholder="Enter text"
                        onChange={this.formValue.bind(this)}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
            </div>
        )
    }
}

export default Login;