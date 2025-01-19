import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";

export const ServicesBooking = () => {
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
            {/* Faith, your code goes under here */}


        </Layout>
    )
}
