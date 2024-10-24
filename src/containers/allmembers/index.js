import { AllMembersWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Card } from "../../components/card";
import { ProfileIcon } from "../../assets";

export const AllMembers = () => {
    const cookies = new Cookies();
    const profileDetails = cookies.get("profile");

    return (
        <Layout>
            <AllMembersWrapper>
                <Card>
                    {/* your code goes in here */}
                    <ProfileIcon />
                    
                </Card>
            </AllMembersWrapper>
        </Layout>
    )
}