import { ProfileIcon } from "../../assets";
import { BaseButton } from "../../components/button/styled";
import { Column } from "../../components/flex/styled";
import { A, H3, Span } from "../../components/typography/styled";
import { CalendarWrapper } from "./styled";

export const Calendar = ({ fullName, plan }) => {
    return (
        <CalendarWrapper>
            <div
                className="profile-box"
            >
                <BaseButton
                    width={"fit-content"}
                    backgroundcolor={"transparent"}
                    className="log-out-button"
                >
                    <Span>
                        LOGOUT
                    </Span>
                </BaseButton>
                <br />
                <Column className="user-profile">
                    <div className="profile-icon-container">
                        <ProfileIcon />
                    </div>
                    <Column className="user-details">
                        <H3>{fullName}</H3>
                        <A>Update Profile</A>
                        <div>
                            <BaseButton
                                backgroundcolor={"#3C1985"}
                                className="membership-button"
                            >
                                <Span>{plan}</Span>
                                <Span>Member</Span>
                            </BaseButton>
                        </div>
                    </Column>
                </Column>
            </div>
            <div className="upcoming-events">
                <H3>Upcoming Events</H3>
            </div>
            <div className="announcements">
                <H3>Announcements</H3>
            </div>
        </CalendarWrapper>
    )
}