import Cookies from "universal-cookie";
import { Layout } from "../../../containers/layout";
import { MembershipPlansWrapper } from "./styled";
import { H1, Label, Span } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseInput } from "../../../components/form/input/styled";
import { BaseButton } from "../../../components/button/styled";
import { Row } from "../../../components/flex/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MembershipPlans = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const { profile } = cookies.getAll();
    const [planDetails, setPlanDetails] = useState({
        planName: "",
        description: "",
        price: "",
        duration: "",
        benefits: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlanDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(planDetails)
            const response = await authenticateUser("login", planDetails);
            if (response.status) {
                cookies.set("data", response.data, {
                    path: "/",
                    maxAge: 1000000,
                });
                navigate("/membership");
            } else {
                console.error("Authentication failed. Please check your credentials and try again.");
            }
        } catch (error) {
        }
    }

    return (
        <Layout
            role={profile?.role}
            title={`Hello ${profile?.role === "administrator" ? profile?.firstname || "" : profile?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profile?.plan?.planName || ""}
            fullName={profile?.role === "administrator" ? `${profile?.firstname || ""} ${profile?.lastname || ""}` : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""}`}
        >
            <MembershipPlansWrapper>
                <div className="title">
                    <H1>CREATE CLUB MEMBERSHIP PLANS</H1>
                </div>
                <div className="background">
                    <form
                        style={{ overflow: "hidden" }}
                    >
                        <BaseFieldSet>
                            <Label>Plan Name</Label>
                            <BaseInput
                                type="text"
                                name="planName"
                                placeholder="Enter your plan name"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>Price(₦)</Label>
                            <BaseInput
                                type="number"
                                name="price"
                                placeholder="Enter your price"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>Duration</Label>
                            <BaseInput
                                type="text"
                                name="duration"
                                placeholder="Enter duration"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>Plan Description</Label>
                            <BaseInput
                                type="text"
                                name="description"
                                placeholder="Enter your plan description"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <Label>Benefits</Label>
                            <BaseInput
                                type="text"
                                name="benefits"
                                placeholder="Enter your benefits"
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </BaseFieldSet>
                    </form>
                </div>
                <Row className='button-row'>
                    <BaseButton
                        type='submit'
                    >
                        Reset Form
                    </BaseButton>
                    <BaseButton>
                        <Span>Save Plan</Span>
                    </BaseButton>
                </Row>
            </MembershipPlansWrapper>
        </Layout>
    );
};
