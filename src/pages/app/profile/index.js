import Cookies from "universal-cookie";
import { Layout } from "../../../containers/layout";
import { ProfileWrapper } from "./styled";
import { H2, P, Span } from "../../../components/typography/styled";
import { Card } from "../../../components/card";
import { BaseButton } from "../../../components/button/styled";
import picture from "../../../assets/images/User icon.svg";
import pic from "../../../assets/gold badge.svg";
import { Column, Row } from "../../../components/flex/styled";

export const Profile = () => {
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
      <ProfileWrapper>
        <div className="background" />
        <Column>
          <div style={{ height: "113px" }} />
          <Card>
            <img src={picture} alt="user icon" className="user-icon" />
            <H2>Sarah Adebowale</H2>
            <Row className="badge">
              <img src={pic} alt="gold badge" />
              <P>
                <Span className="gold">Gold</Span>
                <Span className="planText"> plan</Span>
                <Span className="black"> Staff</Span>
              </P>
            </Row>
            <P>+234 8083876042 </P>
            <P className="head"> <h4>DOB:</h4> 17/04/2005 </P>
            <P>Female </P>
            <BaseButton
              className="change-button"
            >
              <span>
                Edit Profile
              </span>
            </BaseButton>
          </Card>
          <div />
        </Column>
      </ProfileWrapper>
    </Layout>
  );
};