import styled from "styled-components";

export const BillingSubscriptionWrapper = styled("div")(() => {
  return {
    overflow: "hidden",
    "& h1": {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "29.05px",
    },
    "& .section-text": {
      fontSize: "31px",
      fontWeight: 500,
    },
    "& span": {
      fontSize: "20px",
      fontWeight: "500",
    },
    "& p": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#454545",
    },
    "& .filter": {
      gap: "calc(var(--flex-gap)/4)",
      "& span": {
        fontSize: "16px",
      },
      "& select": {
        fontSize: "12px",
        padding: "calc(var(--basic-padding)/5)",
        borderRadius: "5px",
      },
      "@media screen and (max-width: 425px)": {
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },
    "& .active-button": {
      maxWidth: "8rem",
      backgroundColor: "#89C609",
      padding: ".4rem",
      overflow: "hidden",
      "& p": {
        textAlign: "center",
        fontSize: "17px",
        fontWeight: 500,
        marginBlock: 0,
        color: "#EFEFEF",
      }
    },
    "& .change-button": {
      borderRadius: "10px",
      overflow: "hidden",
      "& p": {
        fontSize: "20px",
        fontWeight: 500,
        color: "#EFEFEF",
        marginBlock: 0,
      }
    },
    "& .cancel-button": {
      backgroundColor: "#AD1E1E",
      borderRadius: "10px",
      overflow: "hidden",
      "& p": {
        fontSize: "20px",
        fontWeight: 500,
        color: "#EFEFEF",
        marginBlock: 0,
      }
    },
    "& .button-area": {
      marginBlock: "var(--basic-margin)",
      overflow: "hidden",
      "@media screen and (max-width: 425px)": {
        gap: "calc(var(--flex-gap)/2)",
        flexDirection: "column",
      },
    },
    "& .main-area": {
      border: "1.2px solid black",
      overflow: "hidden",
      padding: "calc(var(--basic-padding) * 1) ",
      borderRadius: "1.2rem",
    },
    "& .billing-subscription-header": {
      gap: "var(--flex-gap)",
      alignItems: "center",
      marginBlockEnd: "20px"
    },
    "@media screen and (max-width: 523px)": {
      "& .billing-subscription-header": {
        gap: "0",
        flexDirection: "column",
        alignItems: "flex-start",
        overflow: "hidden",
        "& .title, & .filter": {
          width: "100%",
        },
      },
    },
  };
});
