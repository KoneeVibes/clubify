import styled from "styled-components";

export const MembershipWrapper = styled("div")(() => {
  return {
    backgroundColor: "#FFFFFF",
    gap: "0",
    "& h2": {
      marginBlock: "calc(var(--basic-margin)/2)",
      fontSize: "24px",
      fontWeight: "400",
    },
    "& .membership-plan>h2": {
      marginBlockStart: 0,
    },
    "& .membership-detail": {
      padding: "calc(var(--basic-padding)/4) calc(var(--basic-padding)/2)",
      "& span:nth-child(1)": {
        fontSize: "16px",
        fontWeight: 500,
      },
      "& span:nth-child(2)": {
        fontSize: "16px",
        fontWeight: 400,
      }
    },
    "& hr": {
      border: "1px solid #3C1985",
    },
    "& .even-row": {
      backgroundColor: "#EFEFEF",
    },
    "& .highlight-yellow": {
      color: "#FFC00E",
    },
    "& .highlight-red": {
      color: "#AD1E1E",
    },
    "& .membership-options": {
      marginBlockEnd: "calc(var(--basic-margin) * 1.5)",
      overflow: "hidden",
      "& span": {
        fontSize: "18px",
        fontWeight: 400,
      },
      "& p": {
        fontSize: "12px",
        fontWeight: 400,
      },
    },
    "& .card div": {
      overflow: "hidden",
    },
    "@media screen and (max-width: 1440px)": {
      "& .file-row": {
        flexDirection: "column",
        gap: "calc(var(--flex-gap)/4)"
      }
    }
  };
});
