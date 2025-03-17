import styled from "styled-components";

export const EventDetailsWrapper = styled("div")(() => {
  return {
    overflow: "hidden",
    "& .heading-row": {
      marginBlockEnd: "var(--basic-margin)",
      "& h1": {
        fontSize: "24px",
        fontWeight: 500,
      },
      "& span": {
        fontSize: "16px",
        fontWeight: 400,
      }
    },
    "& .details": {
      padding: "var(--basic-padding)",
      backgroundColor: "#EFEFEF",
      borderRadius: "2rem",
      marginBlockEnd: "var(--basic-margin)",
    },
    "& .details-text": {
      gap: "calc(var(--flexGap) / 3) ",
      flex: 1,
      overflow: "hidden",
    },
    "& .details-thumbnail": {
      flex: 1,
      overflow: "hidden",
    },
    "& .details-thumbnail>img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      borderRadius: "2rem",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "400",
      margin: "0",
    },
    "& .headers": {
      fontSize: "22px",
      fontWeight: "500",
      marginBottom: "0.2rem",
    },
    "& .call-to-action": {
      overflow: "hidden",
      marginBlock: "var(--basic-margin)",
      "& .RSVP-button": {
        maxWidth: "8rem",
        borderRadius: "8px",
        backgroundColor: "#D9D9D9",
        overflow: "hidden",
        "& p": {
          textAlign: "center",
          fontSize: "22px",
          marginBlock: 0,
          color: "#000000",
        }
      },
      "& select": {
        outline: "none",
        borderRadius: "8px",
        fontSize: "16px",
      },
    },
    "@media screen and (max-width: 1200px)": {
      "& .details": {
        flexDirection: "column",
      },
      "& .call-to-action": {
        gap: "calc(var(--flex-gap)/4)",
        flexDirection: "column",
        "& .RSVP-button": {
          maxWidth: "unset",
        }
      }
    },
  };
});
