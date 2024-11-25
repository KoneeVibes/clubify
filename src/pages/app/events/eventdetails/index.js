import { EventDetailsWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";
import eventImage from "../../../../assets/images/eventimg.jpg";
import { H1, H2, H3, Span } from "../../../../components/typography/styled";

export const EventDetails = () => {
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
      <EventDetailsWrapper>
        <Row className="heading-row" justifycontent={"space-between"}>
          <Span>Event Detail</Span>
          <Span>Share event</Span>
        </Row>
        <div className="hero-img">
          <img src={eventImage} alt="diplomatic agreement" />
        </div>
        <Column className="hero-text">
          <H2>why workPlacePay?</H2>
          <H3>Empower your business with seamless payroll management</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
            sem orci. Nunc a sagittis lacus. Nunc turpis augue, sodales quis
            fermentum vitae, vestibulum a orci. Donec vitae ultrices odio.
            Mauris condimentum id arcu sit amet venenatis. Quisque vitae nisi
            egestas, varius lorem eget, aliquam neque. Donec ornare egestas
            lacinia. Nulla pellentesque eleifend ullamcorper.
          </P>
          <BaseButton width={"fit-content"}>Get Started</BaseButton>
        </Column>
      </EventDetailsWrapper>
    </Layout>
  );
};
