import { MembershipWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Row } from "../../components/flex/styled";
import { BaseInput } from "../../components/form/input/styled";
import { H2, P, Span } from "../../components/typography/styled";
import { Card } from "../../components/card";

export const Membership = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${profile.role === "administrator" ? profile?.firstname || "" : profile?.member?.firstname || ""}`}
      subTitle={new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        weekday: 'long'
      })}
      plan={profile?.plan?.planName || ""}
      fullName={profile?.role === "administrator" ? `${profile?.firstname || ""} ${profile?.lastname || ""}` : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""}`}
    >
      <MembershipWrapper>
        <div className="membership-plan">
          <H2>Membership Plan</H2>
          <Card
            bgcolor={"#D9D9D9"}
            padding={"0"}
          >
            <Row
              className="membership-detail"
              justifycontent={"space-between"}
            >
              <Span>Plan Name</Span>
              {/* <Span className="highlight-yellow">{profileDetails?.plan?.planName}</Span> */}
            </Row>
            <Row
              className="membership-detail even-row"
              justifycontent={"space-between"}
            >
              <Span>Status</Span>
              <Span>Verified</Span>
            </Row>
            <Row
              className="membership-detail"
              justifycontent={"space-between"}
            >
              <Span>Start Date</Span>
              <Span>02, August 2022</Span>
            </Row>
            <Row
              className="membership-detail even-row"
              justifycontent={"space-between"}
            >
              <Span>End Date</Span>
              <Span>02, August 2023</Span>
            </Row>
            <Row
              className="membership-detail"
              justifycontent={"space-between"}
            >
              <Span>Auto-renew</Span>
              <Span>False</Span>
            </Row>
          </Card>
        </div>
        <div className="membership-options">
          <H2>Membership Options & History</H2>
          <Card
            bgcolor={"#EFEFEF"}
          >
            <Row
              className="file-row"
              justifycontent={"space-between"}
            >
              <div>
                <Span>Upload Membership Documents</Span>
                <P>Keep Your Membership Information Updated</P>
              </div>
              <BaseInput
                type="file"
                width={"auto"}
              />
            </Row>
            <hr />
            <div>
              <Span>Upgrade Membership Plan</Span>
              <P>Explore Membership upgrades</P>
            </div>
            <hr />
            <div>
              <Span>View Membership History</Span>
              <P>Your Membership Timeline</P>
            </div>
            <hr />
            <div>
              <Span>Setup Auto-renewal</Span>
              <p>Seamless Renewal; Never Miss a Beat</p>
            </div>
            <hr />
            <div>
              <Span>Membership FAQs</Span>
              <p>Check out our Frequently Asked Questions</p>
            </div>
            <hr />
            <div>
              <Span>Contact Support</Span>
              <P>Get in Touch Today</P>
            </div>
            <hr />
            <div>
              <Span className="highlight-red">Cancel Membership</Span>
              <P>End Membership Subscription</P>
            </div>
          </Card>
        </div>
      </MembershipWrapper>
    </Layout>
  );
};
