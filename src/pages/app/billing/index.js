import { BillingWrapper } from "./styled";
import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { CMS } from "../../../assets";
import { H1, H2, P, Span } from "../../../components/typography/styled";
import { Row } from "../../../components/flex/styled";
import { BaseButton } from "../../../components/button/styled";

export const Billing = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${
        profile.role === "administrator"
          ? profile?.firstname || ""
          : profile?.member?.firstname || ""
      }`}
      subTitle={new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
      })}
      plan={profile?.plan?.planName || ""}
      fullName={
        profile?.role === "administrator"
          ? `${profile?.firstname || ""} ${profile?.lastname || ""}`
          : `${profile?.member?.firstname || ""} ${
              profile?.member?.lastname || ""
            }`
      }
    >
      <BillingWrapper tocolumn={true}>
        <Row className="heading-row" justifycontent={"space-between"}>
          <Span className="event-detail">billing</Span>
          <Span className="share-event"> print invoice</Span>
        </Row>

        <Row className="section2" justifycontent={"space-between"}>
          <div>
            <H1>Invoice #1245-0001 for #20,000</H1>
            <H2>Billing Type: One Time</H2>
          </div>
          <div>
            <CMS />
            <BaseButton>Completed</BaseButton>
          </div>
        </Row>
        <Row className="section3" justifycontent={"space-around"}>
          <div>
            <P>Issued by</P>
            <br></br>
            <P>Ikoye Club</P>
            <Span>finances@Ikoyeclub.com</Span>
          </div>
          <div>
            <P>Recipient</P>
            <br></br>
            <P>Adewale Sarah</P>
            <Span>Sarah@example.com</Span>
          </div>
        </Row>
        <Row className="section4" justifycontent={"space-around"}>
          <div>
            <P>Issued on</P>
            <br></br>
            <P>01 January, 2023</P>
          </div>

          <div>
            <P>Due on</P>
            <br></br>
            <P>01 January, 2023</P>
          </div>
        </Row>
      </BillingWrapper>
    </Layout>
  );
};
