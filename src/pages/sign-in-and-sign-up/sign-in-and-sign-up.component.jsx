import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styled-component';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;