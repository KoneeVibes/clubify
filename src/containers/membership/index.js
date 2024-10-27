import { MembershipWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Column, BaseFlex, Row } from "../../components/flex/styled";
import { H2, H3, P, Span } from "../../components/typography/styled";
import { CardWrapper } from "../../components/card/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
// import { BaseInput } from "../../components/form/input/styled";

export const Membership = () => {
  const cookies = new Cookies();
  const profileDetails = cookies.get("profile");
  return (
    <Layout
      title={`Hello ${profileDetails?.member?.firstname || ""}`}
      subTitle={new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
      })}
      plan={profileDetails?.plan?.planName}
      fullName={`${profileDetails?.member?.firstname || ""} ${profileDetails?.member?.lastname || ""
        }`}
    >
      <MembershipWrapper>
        {/* Newton, your html goes in here */}
        <div className="membershipPlanContainer">
          <div className="membershipDetails">
            <H2>Membership Plan</H2>
            <CardWrapper className="fieldRow">
              <Row className="rowDirection">
                <Span>Plan Name</Span>
                <Span className="highlight">Gold</Span>
              </Row>
              <Row className="rowDirection color">
                <Span>Status</Span>
                <Span>Verified</Span>
              </Row>
              <Row className="rowDirection">
                <Span>Start Date</Span>
                <Span>02, August 2022</Span>
              </Row>
              <Row className="rowDirection color">
                <Span>End Date</Span>
                <Span>02, August 2023</Span>
              </Row>
              <Row className="rowDirection">
                <Span>Auto-renew</Span>
                <Span>False</Span>
              </Row>
            </CardWrapper>
          </div>

          <div className="membership-options">
            <H3>Membership Options & History</H3>
            <CardWrapper className="membershipOptions">
              <BaseFlex className="option" justifycontent={"space-between"}>
                <Column
                  style={{
                    gap: "0",
                  }}
                >
                  <Span>Upload Membership Documents</Span>
                  <P>Keep Your Membership Information Updated</P>
                </Column>
                {/* <InputRow> */}
                {/* <BaseInput /> */}
                <FontAwesomeIcon icon={faUpload} />
                {/* </InputRow> */}
              </BaseFlex>
              <hr></hr>
              <div className="option">
                <Span>Upgrade Membership Plan</Span>
                <P>Explore Membership upgrades</P>
              </div>
              <hr></hr>
              <div className="option">
                <Span>View Membership History</Span>
                <P>Your Membership Timeline</P>
              </div>
              <hr></hr>
              <div className="option">
                <Span>Setup Auto-renewal</Span>
                <p>Seamless Renewal; Never Miss a Beat</p>
              </div>
              <hr></hr>
              <div className="option">
                <Span>Membership FAQs</Span>
                <p>Check out our Frequently Asked Questions</p>
              </div>
              <hr></hr>
              <div className="option contact-support">
                <Span>Contact Support</Span>
                <P>Get in Touch Today</P>
              </div>
              <hr></hr>
              <div className="option cancel-membership">
                <Span>Cancel Membership</Span>
                <P>End Membership Subscription</P>
              </div>
            </CardWrapper>
          </div>
        </div>
      </MembershipWrapper>
    </Layout>
  );
};
