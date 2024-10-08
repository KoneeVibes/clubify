import React from 'react';
import { useState } from 'react';
import { SignInWrapper } from './styled';
import { H1, P, Label, Span, A } from '../../../components/typography/styled';
import { BaseInput } from '../../../components/form/input/styled';
import { BaseButton } from '../../../components/button/styled';
import { Column, Row } from '../../../components/flex/styled';
import { CMS } from '../../../assets';
import { Google } from '../../../assets';
import Login from '../../../assets/images/login.svg';
import { Hrworkplace } from '../../../assets';
import { BaseFieldSet } from '../../../components/form/fieldset/styled';


export const SignIn = () => {
    const [signInDetails, setSignInDetails] = useState({
        email: "",
        password: "",
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
                <Row className="signin-header">
                    <CMS />
                    <div className="signin-text">
                        <H1>Welcome back</H1>
                        <P>Your club adventure begins here</P>
                    </div>
                </Row>
                <form onSubmit={handleSubmit}>
                    <BaseFieldSet>
                        <Label>Email</Label>
                        <BaseInput
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={signInDetails.email}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </BaseFieldSet>
                    <BaseFieldSet>
                        <Label>Password</Label>
                        <BaseInput
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={signInDetails.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </BaseFieldSet>
                    <div className="signin-options">
                        <Label className='remember-label'>
                            <input type="checkbox" name="remember" />
                            Remember me
                        </Label>
                        <A href="#">Forgot Password</A>
                    </div>
                    <Column className='button-column'>
                        <BaseButton className='signin-button'>
                            Sign In
                        </BaseButton>
                        <BaseButton backgroundcolor={"#ffffff"} className="google-signup">
                            <Google />
                            <Span>Sign In with Google</Span>
                        </BaseButton>
                    </Column>
                    <div className="sign-in-link">
                        <P> Don’t have an account? <A href="/sign-in">Sign In</A></P>
                        <Hrworkplace />
                    </div>
                </form>
            </Column>
            <div className="signin-image">
                <img src={Login} alt="A girl in a swimsuit" />
            </div>
        </SignInWrapper>
    );
};
