import { EventDetailsWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";
import eventImage from "../../../../assets/images/eventimg.jpg";
import { P, Span } from "../../../../components/typography/styled";
import { Row, Column } from "../../../../components/flex/styled";
import { BaseButton } from "../../../../components/button/styled";
import { BaseSelect } from "../../../../components/form/select/styled";

export const EventDetails = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${
        profile?.role === "administrator"
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
      <EventDetailsWrapper tocolumn={true}>
        <Row className="heading-row" justifycontent={"space-between"}>
          <Span>Event Detail</Span>
          <Span>🔗 Share event</Span>
        </Row>
        <Row className="background">
        <div className="hero-img">
          <img src={eventImage} alt="diplomatic agreement" />
        </div>
        <Column className="hero-text">
          <Span>Event Name</Span>
          <P>Annual Business Conference</P>
          <P>2022</P>
          <Span>Start Date</Span>
          <P>20, March 2022 - 10:00 AM</P>
          <br></br>
          <Span>End Date</Span>
          <P>20, March 2022 - 03:00 PM</P>
          <br></br>
          <Span>Location</Span>
          <P>Conference Room 302</P>
          <br></br>
          <Span>Description</Span>
        </Column>
        </Row>
        <Row className="top-margin">
          <BaseButton variant="cancel">
            RSVP
          </BaseButton>
          <BaseSelect >
            <option value="Select Company" hidden>
              No, I will not be attending this event
            </option>
            <option value="company1">Company 1</option>
          </BaseSelect>
        </Row>
      </EventDetailsWrapper>
    </Layout>
  );
};
