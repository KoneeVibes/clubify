import styled from "styled-components";

export const AllMembersWrapper = styled("div")(() => {
    return {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(150px, 1fr))",
        gap: "var(--flex-gap)",
        "& .card": {
            padding: 0,
            "& h3": {
                textAlign: "center",
                fontSize: "18px",
            },
            "& svg": {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
            },
        },
        "& .membership-button": {
            "& span:nth-child(1)": {
                color: "#FFC00E",
                fontWeight: 600,
                fontSize: "15px",
                textTransform: "capitalize",
            },
            "& span:nth-child(2)": {
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "15px",
                marginLeft: "0.2rem",
            }
        }
    }
})