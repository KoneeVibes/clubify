import React from 'react';
import { useState } from 'react';
import { SignInWrapper} from './styled';
import { H1, P, Label, Span, A } from '../../../components/typography/styled';
import { BaseInput } from '../../../components/form/input/styled';
import { BaseButton } from '../../../components/button/styled';
import { Column } from '../../../components/flex/styled';
import { CMS } from '../../../assets';
import { Google } from '../../../assets';
import { Login } from '../../../assets';
import { Hrworkplace } from '../../../assets';


export const SignIn = () => {
    const [signInDetails, setSignInDetails] = useState({
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignInDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signInDetails);
    }
    return (
        <SignInWrapper tocolumn={true}>
            <Column className="signin-form">
                <div className="signin-header">
                    <CMS />
                    <div className="signin-text">
                        <H1>Welcome back</H1>
                        <P>Your club adventure begins here</P>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <Label>Email</Label>
                    <BaseInput
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={signInDetails.email}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <Label>Password</Label>
                    <BaseInput
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={signInDetails.password}
                        onChange={(e) => handleChange(e)}
                        required
                    />
                    <div className="signin-options">
                        <Label>
                            <input type="checkbox" name="remember" />
                            Remember me
                        </Label>
                        <A href="#">Forgot Password</A>
                    </div>
                    <BaseButton>
                        Sign In
                    </BaseButton>
                    <BaseButton backgroundcolor={"#ffffff"} className="google-signup">
                        <Google />
                        <Span>Sign In with Google</Span>
                    </BaseButton>
                    <div className="sign-in-link">
                        <P> Don’t have an account? <A href="/sign-in">Sign In</A></P>
                        <Hrworkplace />
                    </div>
                </form>
            </Column>
            <div className="signin-image">
                <Login/>
            </div>
        </SignInWrapper>
    );
};
