import { EventsHistoryWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";

export const EventsHistory = () => {
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
      <EventsHistoryWrapper>

      </EventsHistoryWrapper>
    </Layout>
  )
}