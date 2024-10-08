import { ProfileIcon } from "../../assets";
import { BaseButton } from "../button/styled";
import { Column } from "../flex/styled";
import { A, H3, Span } from "../typography/styled";
import { CalendarWrapper } from "./styled";

export const Calendar = () => {
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
                        <H3>Adewale Sarah</H3>
                        <A>Update Profile</A>
                        <div>
                            <BaseButton
                                backgroundcolor={"#3C1985"}
                                className="membership-button"
                            >
                                <Span>Gold</Span>
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