import { SignUpWrapper, SignUpRow } from "./styled";
import { H3, P, Label,A } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseInput } from "../../../components/form/input/styled"
import { BaseButton } from "../../../components/button/styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { CMS } from "../../../assets";
import { Hrworkplace } from "../../../assets";
import { SignUpimg } from "../../../assets";
import { Column } from "../../../components/flex/styled";
import { Google } from "../../../assets";
import { SignUpWrapper } from "./styled";

export const SignUp = () => {
    return (
        <SignUpWrapper tocolumn={true}>
            <Column className="reg-form">
                <div className="regform-img">
                    <CMS />
                    <div className="regform-text">
                        <H3>Register</H3>
                        <P>Your club adventure begins here</P>
                    </div>
                </div>

                <form>
                    <SignUpRow>
                        <BaseFieldSet>
                            <Label>Firstname</Label>
                            <BaseInput 
                                type="text"
                                name="firstname"
                                // style= {{
                                //     width: "40%",
                                // }}
                                // value={referForm.firstName}
                                // onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>Lastname</Label>
                            <BaseInput
                                type="text"
                                name="lastname"
                                // style= {{
                                //     width: "40%",
                                // }}
                                // value={referForm.lastName}
                                // onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                    </SignUpRow>
                    <Label>Email</Label>
                    <BaseInput
                        type="email"
                        name="email"
                        placeholder="Enter email here"
                        style= {{
                            width: "-webkit-fill-available",
                        }}
                        // value={referForm.companyEmail}
                        // onChange={(e) => handleChange(e)}
                        required
                    />
                    <Label>Password</Label>
                    <BaseInput
                        type="password"
                        name=""
                        placeholder=""
                        style= {{
                            width: "-webkit-fill-available",
                        }}
                        // value={referForm.companyEmail}
                        // onChange={(e) => handleChange(e)}
                        required
                    />
                    <Label>Repeat Password</Label>
                    <BaseInput
                        type="password"
                        name=""
                        placeholder=""
                        style= {{
                            width: "-webkit-fill-available",
                        }}
                        // value={referForm.companyEmail}
                        // onChange={(e) => handleChange(e)}
                        required
                    />
                    <BaseButton>Next</BaseButton>
                    <BaseButton backgroundcolor={"#ffffff"} className="google-btn">
                       <Google/>Sign Up with Google
                    </BaseButton>
                    <div className="sign-in-link">
                      <P>Already have an account? <A href="/sign-in">Sign In</A></P> 
                      <Hrworkplace/>
                    </div>
                    
                </form>
                
            </Column>
            <div className="reg-image">
                <SignUpimg />
            </div>
        </SignUpWrapper>
    )
}
