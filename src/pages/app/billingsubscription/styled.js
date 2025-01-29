import styled from "styled-components";

export const BillingSubscriptionWrapper = styled("div")(() => {
  return {
    "& h1": {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "29.05px",
    },
    "& .section-text": {
      fontSize: "31px",
      fontWeight: "500",
    },
    "& .span": {
      fontSize: "20px",
      fontWeight: "500",
    },
    "& .paragraph": {
      fontSize: "18px",
      fontWeight: "500",
      color: "#454545",
    },
    "& .section2": {
      marginBottom: "2rem",
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
    },

    "& .active": {
      width: "8rem",
      textAlign: "center",
      fontSize: "17px",
      backgroundColor: "#89C609",
      fontWeight: "500",
      padding: ".4rem",
    },
    "& .change": {
      color: "#EFEFEF",
      borderRadius: "10px",
      fontSize: "20px",
      fontWeight: "500",
    },
    "& .cancel": {
      backgroundColor: "#AD1E1E",
      color: "#EFEFEF",
      borderRadius: "10px",
      fontSize: "20px",
      fontWeight: "500",
    },
    "& .basebutton": {
      marginTop: "2rem",
      marginBottom: "2rem",
    },
    "& .border": {
      border: "1.2px solid black",
      overflow: "hidden",
      padding: "calc(var(--basic-padding) * 1) ",
      borderRadius: "1.2rem",
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
    "@media screen and (min-width: 768px) and (max-width: 860px)": {
      "& .billing-subscription-header": {
        gap: "0",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    "@media screen and (min-width: 1025px) and (max-width: 1169px)": {
      "& .billing-subscription-header": {
        gap: "0",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  };
});
