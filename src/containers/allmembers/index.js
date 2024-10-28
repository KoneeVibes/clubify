import { AllMembersWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Card } from "../../components/card";
import { ProfileIcon } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import { H3, Span } from "../../components/typography/styled";

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
                {Array.from({ length: 9 }).map((_, index) => {
                    return (
                        <Card
                            key={index}
                            radius={"5px"}
                        >
                            <div>
                                <ProfileIcon />
                            </div>
                            <H3>{`${profileDetails?.member?.firstname || ""} ${profileDetails?.member?.lastname || ""}`}</H3>
                            <div>
                                <BaseButton
                                    borderradius={"5px"}
                                    backgroundcolor={"#3C1985"}
                                    className="membership-button"
                                >
                                    <Span>{profileDetails?.plan?.planName}</Span>
                                    <Span>Admin</Span>
                                </BaseButton>
                            </div>
                        </Card>
                    )
                })}
            </AllMembersWrapper>
        </Layout>
    )
}