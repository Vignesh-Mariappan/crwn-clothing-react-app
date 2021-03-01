import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-input/custom-input.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

/* 
    class based component
    maintains state
    render method will return four inputs(name, email, password & confirm password) and one submit button 
    handleChange method will set the state values to the values entered by the user
    handleSubmit will take the state values and create one new user in firestore and set the state values to ''
*/

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log('User ', user);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch(error) {
            console.log('Error occured during sign up ', error);
        }

    }

    handleChange = event => { 
        const { name, value } = event.target;

        this.setState({ [name]: value });
     };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className = "sign-up">
                <h2 className = "title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = "sign-up-form" onSubmit = { this.handleSubmit }>
                <FormInput 
                    type = "text" 
                    name = "displayName" 
                    value = { displayName }
                    label = "Name" 
                    handleChange = { this.handleChange }
                    required 
                />
                <FormInput 
                    type = "email" 
                    name = "email" 
                    value = { email }
                    label = "Email" 
                    handleChange = { this.handleChange }
                    required 
                />
                <FormInput 
                    type = "password" 
                    name = "password" 
                    label = "Password"
                    value = { password } 
                    handleChange = { this.handleChange }
                    required 
                />
                <FormInput 
                    type = "password" 
                    name = "confirmPassword" 
                    label = "Confirm Password"
                    value = { confirmPassword } 
                    handleChange = { this.handleChange }
                    required 
                />
                <CustomButton type = "submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;