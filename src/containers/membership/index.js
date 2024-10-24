import { MembershipWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";

export const Membership = () => {
    const cookies = new Cookies();
    const profileDetails = cookies.get("profile");
    return (
        <Layout
            title={`Hello ${profileDetails?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profileDetails?.plan?.planName}
            fullName={`${profileDetails?.member?.firstname || ""} ${profileDetails?.member?.lastname || ""}`}
        >
            <MembershipWrapper>
                {/* Newton, your html goes in here */}

            </MembershipWrapper>
        </Layout>
    )
}
