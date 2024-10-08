import styled from "styled-components";

export const CalendarWrapper = styled("div")(() => {
    return {
        backgroundColor: "#EFEFEF",
        padding: "var(--basic-padding)",
        // position: "sticky",
        // bottom: 0,
        // height: "15rem",
        // zIndex: 1,
        "& h3": {
            marginBlock: 0,
            fontWeight: 500,
            fontSize: "18px"
        },
        "& .profile-box": {
            overflow: "hidden",
            "& .log-out-button": {
                float: "right",
                padding: 0,
                "& span": {
                    color: "#000000",
                    fontWeight: 500,
                    fontSize: "12px",
                }
            },
            "& .membership-button": {
                "& span:nth-child(1)": {
                    color: "#FFC00E",
                    fontWeight: 600,
                    fontSize: "15px",
                },
                "& span:nth-child(2)": {
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "15px",
                    marginLeft: "0.2rem",
                }
            },
            "& .user-profile": {
                gap: "calc(var(--flex-gap)/2)",
                alignItems: "center",
                overflow: "hidden",
            },
            "& .user-details": {
                gap: 0,
                alignItems: "center"
            },
            "& a": {
                marginBlock: "0.5rem",
                fontWeight: 300,
                fontSize: "10px"
            }
        },
        "& .upcoming-events": {
            margin: "var(--basic-margin) 0",
            "& h3": {
                textAlign: "center",
            }
        },
        "& .announcements": {
            margin: "var(--basic-margin) 0",
            "& h3": {
                textAlign: "center",
            }
        },
        "@media screen and (min-width: 768px)": {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: "calc(100% - var(--calendar-width))",
            right: 0,
            overflowY: "auto",
            // height: "auto",
            // zIndex: "auto",
        }
    }
})