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
import User from "../../../assets/images/User icon.svg";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../../utils/apis/authUser";
import { DotLoader } from "react-spinners";
import { BaseSelect } from "../../../components/form/select/styled";

export const SignUp = () => {
    const genders = ["male", "female", "other"];
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSignedUpAsMember, setIsSignedUpAsMember] = useState(true);
    const [formDetails, setFormDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        dob: "",
        gender: "",
        phone: "",
        address: "",
        displayPicture: "",
        role: "",
        attachments: [{}]
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "role") {
            if (value === "member") {

                setIsSignedUpAsMember(true);
            } else {
                setIsSignedUpAsMember(false);
            };
        };
        if (name === "displayPicture") {
            setFormDetails((prev) => ({
                ...prev,
                [name]: files[0]
            }))
        } else {
            setFormDetails((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    };

    const handleSubmit = async (e) => {
        let payload;
        e.preventDefault();
        if (isSignedUpAsMember) {
            const { role, address, attachments, displayPicture, ...rest } = formDetails;
            payload = { ...rest };
        } else {
            const formData = new FormData();
            formData.append("firstname", formDetails.firstname);
            formData.append("lastname", formDetails.lastname);
            formData.append("email", formDetails.email);
            formData.append("password", formDetails.password);
            formData.append("dob", formDetails.dob);
            formData.append("gender", formDetails.gender);
            formData.append("phone", formDetails.phone);
            formData.append("address", formDetails.address);
            formData.append("displayPicture", formDetails.displayPicture);
            formData.append("role", formDetails.role);
            formDetails.attachments.forEach((attachment, index) => {
                if (attachment.file) {
                    formData.append("attachments", attachment.file);
                }
            });
            payload = formData
        };
        setError(null);
        setLoading(true);
        try {
            const response = await authenticateUser(isSignedUpAsMember ? "register" : "staff/register", payload);
            if (response.status) {
                setLoading(false);
                navigate("/");
            } else {
                setLoading(false);
                setError('Authentication failed. Please check your credentials and try again.');
                console.error("Authentication failed. Please check your credentials and try again.");
            }
        } catch (error) {
            setLoading(false);
            setError(`Signup failed. ${error.message}`);
            console.error('Signup failed:', error);
        }
    };

    const handleClickNext = async (e, step) => {
        setError(null);
        if (step === 2) {
            return await handleSubmit(e);
        };
        setStep((prev) => {
            return prev + 1;
        });
    };

    const handleClickPrevious = () => {
        setError(null);
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
                            <H1>You’re almost done!</H1>
                            <P>Your club adventure begins here</P>
                            <img src={User} alt="A man taking a selfie" />
                        </div>
                    )}
                </Row>
                <form
                    style={{ overflow: "hidden" }}
                >
                    {step === 1 && (
                        <Fragment>
                            <SignUpRow>
                                <BaseFieldSet>
                                    <Label>Firstname</Label>
                                    <BaseInput
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter your first name"
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
                                        placeholder="Enter your last name"
                                        value={formDetails.lastname}
                                        onChange={(e) => handleChange(e)}
                                        required
                                    />
                                </BaseFieldSet>
                            </SignUpRow>
                            <BaseFieldSet>
                                <Label>Email</Label>
                                <BaseInput
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formDetails.email}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <BaseFieldSet>
                                <Label>Password</Label>
                                <BaseInput
                                    type="password"
                                    name="password"
                                    placeholder="Enter a Password"
                                    value={formDetails.password}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <div className="button-box">
                                <BaseButton
                                    className="sign-button"
                                    onClick={(e) => handleClickNext(e, step)}
                                >
                                    Next
                                </BaseButton>
                            </div>
                        </Fragment>
                    )}
                    {step === 2 && (
                        <Fragment>
                            {/* Form for step 2 including the previous and next buttons */}
                            <BaseFieldSet>
                                <Label>Address</Label>
                                <BaseInput
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formDetails.address}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <BaseFieldSet>
                                <Label>Gender</Label>
                                <BaseSelect
                                    name="gender"
                                    value={formDetails.gender}
                                    onChange={(e) => handleChange(e)}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    {genders.map((gender, index) => (
                                        <option key={index} value={gender}>
                                            {gender.charAt(0).toUpperCase() + gender.slice(1)}
                                        </option>
                                    ))}
                                </BaseSelect>
                            </BaseFieldSet>
                            <BaseFieldSet>
                                <Label>DOB</Label>
                                <BaseInput
                                    type="date"
                                    name="dob"
                                    value={formDetails.dob}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <BaseFieldSet>
                                <Label>Phone</Label>
                                <BaseInput
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formDetails.phone}
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <BaseFieldSet>
                                <Label>Upload Picture</Label>
                                <BaseInput
                                    type="file"
                                    name="displayPicture"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </BaseFieldSet>
                            <Label>Sign up as:</Label>
                            <Row className="user-roles">
                                <BaseFieldSet className="userrole-radio">
                                    <BaseInput
                                        type="radio"
                                        name="role"
                                        value={"member"}
                                        checked={formDetails.role === "member"}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <Label>Member</Label>
                                </BaseFieldSet>
                                {/* <BaseFieldSet className="userrole-radio">
                                    <BaseInput
                                        type="radio"
                                        name="role"
                                        value={"administrator"}
                                        checked={formDetails.role === "administrator"}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <Label>Admin</Label>
                                </BaseFieldSet> */}
                                <BaseFieldSet className="userrole-radio">
                                    <BaseInput
                                        type="radio"
                                        name="role"
                                        value={"staff"}
                                        checked={formDetails.role === "staff"}
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <Label>Staff</Label>
                                </BaseFieldSet>
                            </Row>
                            <SignUpRow className="signin-button">
                                <BaseButton
                                    onClick={(e) => handleClickPrevious(e, step)}
                                >
                                    Previous
                                </BaseButton>
                                <BaseButton
                                    onClick={(e) => handleClickNext(e, step)}
                                >
                                    {loading ?
                                        <DotLoader
                                            size={20}
                                            color="white"
                                            className='dotLoader'
                                        />
                                        : "Sign up"
                                    }
                                </BaseButton>
                            </SignUpRow>
                        </Fragment>
                    )}
                    <div className="button-box">
                        <BaseButton backgroundcolor={"#ffffff"} className="google-btn">
                            <Google />Sign Up with Google
                        </BaseButton>
                    </div>
                    {error && <P style={{ color: 'red', fontSize: "18px" }}>{error}</P>}
                    <div className="sign-in-link">
                        <P>Already have an account? <A href="/">Sign In</A></P>
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
