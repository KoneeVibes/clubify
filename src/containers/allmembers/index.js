import { AllMembersWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Card } from "../../components/card";
import { ProfileIcon } from "../../assets";

export const AllMembers = () => {
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
            <AllMembersWrapper>
                <Card>
                    {/* your code goes in here */}
                    <ProfileIcon />

                </Card>
            </AllMembersWrapper>
        </Layout>
    )
}