import { SignUpWrapper, SignUpRow } from "./styled";
import { H1, P, Label, A } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseInput } from "../../../components/form/input/styled"
import { BaseButton } from "../../../components/button/styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { CMS } from "../../../assets";
import { Hrworkplace } from "../../../assets";
import signupimg from "../../../assets/images/signup.svg";
import { Column, Row } from "../../../components/flex/styled";
import { Google } from "../../../assets";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    // update below with form controller
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        repeatpassword:"",
        member:"",
        admin:"",
        staff:"",
        
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails);
    }
    const [step, setStep] = useState(1);

    const handleClickNext = (e, step) => {
        if (step === 2) {
            // submitting signup form.
            return navigate("/signin");
        };
        setStep((prev) => {
            return prev + 1;
        });
    };

    const handleClickPrevious = () => {
        setStep((prev) => {
            return prev - 1;
        })
    };

    return (
        <SignUpWrapper tocolumn={true}>
            <Column className="reg-form">
                <Row className="regform-title">
                    <CMS />
                    {step === 1 && (
                        <div className="regform-text">
                            <H1>Register</H1>
                            <P>Your club adventure begins here</P>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="regform-text">
                            <H1>Register</H1>
                            <P>Your club adventure begins here</P>
                            {/* Introduce the svg here */}
                        </div>
                    )}
                </Row>
                <form>
                    {step === 1 && (
                        <Fragment>
                            <SignUpRow>
                                <BaseFieldSet>
                                    <Label>Firstname</Label>
                                    <BaseInput
                                        type="text"
                                        name="firstname"
                                        value={formDetails.firstname}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </BaseFieldSet>
                                <BaseFieldSet>
                                    <Label>Lastname</Label>
                                    <BaseInput
                                        type="text"
                                        name="lastname"
                                        value={formDetails.lastname}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </BaseFieldSet>
                            </SignUpRow>
                            <Label>Email</Label>
                            <BaseInput
                                type="email"
                                name="email"
                                placeholder="Enter email here"
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                                value={formDetails.email}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Label>Password</Label>
                            <BaseInput
                                type="password"
                                name="password"
                                placeholder=""
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                                value={formDetails.password}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Label>Repeat Password</Label>
                            <BaseInput
                                type="password"
                                name="repeatpassword"
                                placeholder=""
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                                value={formDetails.repeatpassword}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <BaseButton
                                onClick={(e) => handleClickNext(e, step)}
                            >
                                Next
                            </BaseButton>
                        </Fragment>
                    )}
                    {step === 2 && (
                        <Fragment>
                            {/* Form for step 2 including the previous and next buttons */}

                            <Label>DOB</Label>
                            <BaseInput
                                type="date"
                                name="dob"
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                                value={formDetails.dob}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Label>Phone</Label>
                            <BaseInput
                                type="tel"
                                name="phone"
                                style={{
                                    width: "-webkit-fill-available",
                                }}
                                value={formDetails.phone}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <Label>Sign up as:</Label>
                            <SignUpRow className="user-roles">
                                <BaseFieldSet>
                                    <input 
                                        type="radio" 
                                        name="member" 
                                        value={formDetails.member}
                                        onChange={(e) => handleChange(e)}
                                     />
                                    <Label htmlFor="member">Member</Label>
                                </BaseFieldSet>
                                <BaseFieldSet>
                                    <input 
                                        type="radio" 
                                        name="admin"  
                                        value={formDetails.admin}
                                        onChange={(e) => handleChange(e)} 
                                    />
                                    <Label htmlFor="admin">Admin</Label>
                                </BaseFieldSet>
                                <BaseFieldSet>
                                    <input 
                                        type="radio" 
                                        name="staff"  
                                        value={formDetails.staff}
                                        onChange={(e) => handleChange(e)} 
                                    />
                                    <Label htmlFor="staff">Staff</Label>
                                </BaseFieldSet>
                            </SignUpRow>

                            <SignUpRow>
                                <BaseButton
                                    onClick={(e) => handleClickPrevious(e, step)}
                                >
                                    Previous
                                </BaseButton>

                                <BaseButton
                                    onClick={(e) => handleClickNext(e, step)}
                                >
                                    Sign up
                                </BaseButton>
                            </SignUpRow>
                        </Fragment>
                    )}
                    <BaseButton backgroundcolor={"#ffffff"} className="google-btn">
                        <Google />Sign Up with Google
                    </BaseButton>
                    <div className="sign-in-link">
                        <P>Already have an account? <A href="/sign-in">Sign In</A></P>
                        <Hrworkplace />
                    </div>
                </form>

            </Column>
            <div className="reg-image">
                <img src={signupimg} alt="A man taking a selfie" />
            </div>
        </SignUpWrapper>
    )
}
