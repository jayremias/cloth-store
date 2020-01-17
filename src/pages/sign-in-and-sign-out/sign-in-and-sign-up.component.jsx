import React from 'react';

import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/signin/sign-in.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <h1>Sign In</h1>
        <SignIn/>
    </div>
)

export default SignInAndSignUpPage;