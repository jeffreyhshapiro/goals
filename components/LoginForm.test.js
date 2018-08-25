import React from 'react';
import LoginForm from './LoginForm.js';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('< LoginForm />', () => {

    
    it('should log user in with proper credentials', () => {
        const initialState = { 
            authErr: {
                err: "err message"
            }
        }
        const store = mockStore(initialState)
        const wrapper = shallow(<LoginForm store={ store } />);

        const wrapperInstance = wrapper.dive()
        
        wrapperInstance.instance().setState({
            emailAddress: "geoff@geoff.com",
            password: "geoffgeoff"
        });

        // console.log(wrapperInstance.instance().completeSignIn());

        return wrapperInstance.instance().completeSignIn().then((res) => {
            console.log(res)
        })
        
    });
})