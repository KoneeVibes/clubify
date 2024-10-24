import { MembershipWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { AllMembersWrapper } from "../allmembers/styled";

export const Membership = () => {
    const cookies = new Cookies();
    const profileDetails = cookies.get("profile");
    return (
        <Layout
            title={`Hello ${profileDetails?.allmembers?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profileDetails?.plan?.planName}
            fullName={`${profileDetails?.allmembers?.firstname || ""} ${profileDetails?.allmembers?.lastname || ""}`}
        >
            <AllMembersWrapper>
                {/* Newton, your html goes in here */}

            </AllMembersWrapper>
        </Layout>
    )
}
