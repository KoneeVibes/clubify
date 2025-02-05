import styled from "styled-components";

export const BillingDetailWrapper = styled("div")(() => {
  return {
    overflow: "hidden",
    "& .heading-row": {
      marginBlockEnd: "1rem",
      "& .print-invoice": {
        cursor: "pointer",
        overflow: "hidden",
        "& p": {
          fontSize: "19px",
          fontWeight: "400",
        },
      },
      "@media screen and (max-width: 425px)": {
        gap: 0,
        alignItems: "flex-start",
        flexDirection: "column",
        "& .print-invoice, & h1": {
          width: "100%",
        },
      },
    },
    "& .main-area": {
      border: "1.2px solid black",
      overflow: "hidden",
      padding: "calc(var(--basic-padding) * 1) ",
      borderRadius: "1.2rem",
      marginBlockEnd: "var(--basic-margin)",
    },
    "& h1": {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "29.05px",
    },
    "& p": {
      color: "#454545",
      fontSize: "16px",
      fontWeight: "500",
    },
    "& .detail": {
      "& span": {
        fontSize: "16px",
        fontWeight: "500",
        whiteSpace: "normal",
      },
    },
    "& .completed-button": {
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
      },
    },
    "& .invoice-number": {
      color: "#4B95FF",
    },
    "& .billing-table": {
      overflow: "auto",
    },
    "& .invoice-title": {
      overflow: "hidden",
      "& span": {
        fontSize: "25px",
        fontWeight: 500,
      },
    },
    "& .bill-type": {
      "& span": {
        fontSize: "22px",
        fontWeight: 500,
        lineHeight: "26.63px",
      },
    },
    "& .details": {
      "@media screen and (min-width: 1440px)": {
        padding: "0  calc(var(--basic-padding) * 2)",
      },
      "& .detail-header": {
        "& span": {
          fontSize: "20px",
          fontWeight: "500",
        },
      },
    },
  };
});
