import { AllMembersWrapper } from "./styled";
import { Layout } from "../layout/index";
import Cookies from "universal-cookie";
import { Card } from "../../components/card";
import { ProfileIcon } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import { H3, Span } from "../../components/typography/styled";

export const AllMembers = () => {
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
                            <H3>{`${profile.firstname || ""} ${profile.lastname || ""}`}</H3>
                            <div>
                                <BaseButton
                                    borderradius={"5px"}
                                    backgroundcolor={"#3C1985"}
                                    className="membership-button"
                                >
                                    {/* <Span>{profile.planName}</Span> */}
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