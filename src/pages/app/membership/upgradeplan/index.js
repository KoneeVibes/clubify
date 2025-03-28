import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";
import { UpgradePlanWrapper } from "./styled";
import { H3, H1, P, Li, Span } from "../../../../components/typography/styled";
import { Row } from "../../../../components/flex/styled";
import { Card } from "../../../../components/card";
import { BaseButton } from "../../../../components/button/styled";


export const Upgrade = () => {
    const cookies = new Cookies();
    const { profile } = cookies.getAll();

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
                    <H1>WE OFFER GREAT <H1 className="highlight-purple">PRICE PLANS</H1> FOR CLUB MEMBERSHIP</H1>
                    <div className="upload-button">
                        <BaseButton
                            backgroundcolor={"#4B0082"}
                        >
                            <Span>Add Plan</Span>
                        </BaseButton>
                    </div>
                </Row>

                <Row className="cards" justifycontent="space-between">
                    <Card
                        bgcolor={"#D9D9D9"}
                        padding={"0"}
                    >
                        <div className="card-header">
                            <H3>Gold</H3>
                        </div>
                        <div className="card-body">
                            <P><strong>Duration:</strong>12 Months</P>
                            <P><strong>Description:</strong>Premium membership with exclusive
                                access to all club activities,events,and VIP priveleges</P>
                            <P><strong>Benefits:</strong></P>
                            <ul>
                                <Li>Full access to all club events and networking session</Li>
                                <Li>Priority seating at premium events</Li>
                                <Li>Exclusive mentorship and training sessions</Li>
                                <Li>Free access to all club facilities</Li>
                                <Li>Free access to all club events</Li>
                            </ul>
                        </div>
                        <Span className="amount">₦100,000</Span>
                        <div className="upload-button">
                            <BaseButton>
                                <Span>Add Plan</Span>
                            </BaseButton>
                        </div>
                    </Card>
                    <Card
                        bgcolor={"#D9D9D9"}
                        padding={"0"}
                    >
                        <div className="card-header">
                            <H3>Silver</H3>
                        </div>
                        <div className="card-body">
                        </div>
                    </Card>
                    <Card
                        bgcolor={"#D9D9D9"}
                        padding={"0"}
                    >
                        <div className="card-header">
                            <H3>Bronze</H3>
                        </div>
                        <div className="card-body">
                        </div>

                    </Card>
                </Row>


            </UpgradePlanWrapper>
        </Layout>
    )
}