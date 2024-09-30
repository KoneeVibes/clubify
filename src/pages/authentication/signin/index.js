import React from 'react';
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

                <form>
                    <Label>Email</Label>
                    <BaseInput
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                    <Label>Password</Label>
                    <BaseInput
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                    <div className="signin-options">
                        <label>
                            <input type="checkbox" name="remember" />
                            Remember me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <BaseButton>Sign In</BaseButton>
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
