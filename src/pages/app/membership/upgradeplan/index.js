import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";
import { UpgradePlanWrapper } from "./styled";
import { H3, H1, P, Li, Span } from "../../../../components/typography/styled";
import { Row } from "../../../../components/flex/styled";
import { Card } from "../../../../components/card";
import { BaseButton } from "../../../../components/button/styled";
import { getAllMembershipPlans } from "../../../../utils/apis/membershipplans/getAllMembershipPlans";

export const Upgrade = () => {
    const cookies = new Cookies();
    const { profile, data } = cookies.getAll();

    const plansInfo = [
        {
            name: "Gold",
            duration: "12 Months",
            description: "Premium membership with exclusive access to all club activities, events, and VIP priveleges",
            benefits: ["Full access to all club events and networking session", "Priority seating at premium events", "Exclusive mentorship and training sessions", "Free access to all club facilities", "Free access to all club event"],
            amount: "₦100,000"
        },
        {

        }
    ];

    // eslint-disable-next-line no-unused-vars
    const [plans, setPlans] = useState({});

    useEffect(() => {
        getAllMembershipPlans(data.token)
            .then((detail) => {
                setPlans(detail);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
            });
    }, [data.token]);

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
            <UpgradePlanWrapper>
                <Row className="title">
                    <div
                        className="title-text"
                    >
                        <H1>WE OFFER GREAT <Span className="highlight-purple">PRICE PLANS</Span> FOR CLUB MEMBERSHIP</H1>
                    </div>
                    <div className="upload-button">
                        <BaseButton
                            backgroundcolor={"#4B0082"}
                        >
                            <Span>Add Plan</Span>
                        </BaseButton>
                    </div>
                </Row>
                <Row
                    className="card-row"
                    justifycontent="space-between"
                >
                    {plansInfo?.map((plan, index) => {
                        return (
                            <Card
                                key={index}
                                bgcolor={"#D9D9D9"}
                            >
                                <div className="card-header">
                                    <H3>{plan.name}</H3>
                                </div>
                                <div className="card-body">
                                    <P><strong>Duration:</strong>{plan.duration}</P>
                                    <P><strong>Description:</strong>{plan.description}</P>
                                    <P><strong>Benefits:</strong></P>
                                    <ul>
                                        {plan?.benefits?.map((benefit, index) => (
                                            <Li
                                                key={index}
                                            >
                                                {benefit}
                                            </Li>
                                        ))}
                                    </ul>
                                    <Span className="amount">{plan.amount}</Span>
                                    <div className="upload-button">
                                        <BaseButton>
                                            <Span>Add Plan</Span>
                                        </BaseButton>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </Row>
            </UpgradePlanWrapper>
        </Layout >
    )
}
