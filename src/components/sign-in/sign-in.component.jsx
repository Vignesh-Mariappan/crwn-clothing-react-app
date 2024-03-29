import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-input/custom-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log('Error occured while sign in ', error);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    } 

    render() {
        return (
            <div className = 'sign-in'>
                <h2 className = 'title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = { this.handleSubmit }>
                    <FormInput 
                        type = "email" 
                        name = "email" 
                        value = { this.state.email }
                        label = "Email" 
                        handleChange = { this.handleChange }
                        required 
                    />
                    <FormInput 
                        type = "password" 
                        name = "password" 
                        label = "Password"
                        value = { this.state.password } 
                        handleChange = { this.handleChange }
                        required 
                    />
                    <div className = 'buttons'>
                        <CustomButton type = "submit">Sign In</CustomButton>
                        <CustomButton type = "button" onClick = { signInWithGoogle } isGoogleSignIn = { true }>SignIn With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;