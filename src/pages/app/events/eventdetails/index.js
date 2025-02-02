import { EventDetailsWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";
import eventImage from "../../../../assets/images/eventimg.jpg";
import { H1, P, Span } from "../../../../components/typography/styled";
import { Row, Column } from "../../../../components/flex/styled";
import { BaseButton } from "../../../../components/button/styled";
import { BaseSelect } from "../../../../components/form/select/styled";

export const EventDetails = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${profile?.role === "administrator"
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
          : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""
          }`
      }
    >
      <EventDetailsWrapper>
        <Row
          className="heading-row"
          alignitem={"center"}
          justifycontent={"space-between"}
        >
          <H1>Event Detail</H1>
          <Span>🔗 Share event</Span>
        </Row>
        <Row
          className="details"
        >
          <div className="details-thumbnail">
            <img src={eventImage} alt="diplomatic agreement" />
          </div>
          <Column className="details-text">
            <Span className="headers">Event Name</Span>
            <P>Annual Business Conference</P>
            <P>2022</P>
            <br></br><br></br>
            <Span className="headers">Start Date</Span>

            <P>20, March 2022 - 10:00 AM</P>
            <br></br><br></br>
            <Span className="headers">End Date</Span>

            <P>20, March 2022 - 03:00 PM</P>
            <br></br><br></br>
            <Span className="headers">Location</Span>

            <P>Conference Room 302</P>
            <br></br><br></br>
            <Span className="headers">Description</Span>
          </Column>
        </Row>
        <Row className="call-to-action">
          <BaseButton
            className="RSVP-button"
          >
            <P>RSVP</P>
          </BaseButton>
          <BaseSelect >
            <option value="no" hidden>
              No, I will not be attending this event
            </option>
            <option value="yes">Yes, I will be attending this event</option>
          </BaseSelect>
        </Row>
      </EventDetailsWrapper>
    </Layout>
  );
};
