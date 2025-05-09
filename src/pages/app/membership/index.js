import { MembershipWrapper } from "./styled";
import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { Row } from "../../../components/flex/styled";
import { H2, P, Span } from "../../../components/typography/styled";
import { Card } from "../../../components/card";
import { getMembershipPlan } from "../../../utils/apis/membershipplans/getMembershipPlan";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Membership = () => {
  const cookies = new Cookies();
  const { profile, data } = cookies.getAll();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [plan, setPlan] = useState({});

  useEffect(() => {
    getMembershipPlan(data.token, "")
      .then((detail) => {
        setPlan(detail);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
      });
  }, [data]);

  const handleNavigateToUploadFile = (e, id) => {
    e.preventDefault();
    return navigate(`/membership/uploadfile`)
  };
  const handleNavigateToUpgradeplan = (e, id) => {
    e.preventDefault();
    return navigate(`/membership/upgradeplan`)
  };

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
                <P
                  onClick={handleNavigateToUploadFile}>
                  Keep Your Membership Information Updated</P>
              </div>
            </Row>
            <hr />
            <div>
              <Span>Upgrade Membership Plan</Span>
              <P
                onClick={handleNavigateToUpgradeplan}>
                Explore Membership upgrades</P>
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
