import styled from "styled-components";

export const BillingWrapper = styled("div")(() => {
  return {
    "& .heading-row": {
      marginBottom: "1rem",
    },
    "& .border": {
      border: "1.2px solid black",
      overflow: "hidden",
      padding: "calc(var(--basic-padding) * 1) ",
      borderRadius: "1.2rem",
    },
    "& .border2": {
      padding: "0 calc(var(--basic-padding) * .8) ",
    },
    "& .section3-text": {
      fontSize: "19px",
      fontWeight: "500",
    },
    "& .span-text": {
      fontSize: "22px",
      fontWeight: "500",
    },
    "& P": {
      color: "#454545",
      fontSize: "16px",
      fontWeight: "500",
    },
    "& .detail-section": {
      marginTop: "2.5rem",
      borderBottom: "2px solid grey",
    },
    "& .detail-section-text": {
      fontSize: "20px",
      fontWeight: "500",
    },
    "& .section1": {
      "& svg": {
        width: "4rem",
      },
    },
    "& .billing": {
      fontSize: "24px",
      fontWeight: "500",
    },
    "& .print-invoice": {
      fontSize: "19px",
      width: "9rem",
      fontWeight: "400",
      border: "none",
      backgroundColor: "white ",
      cursor: "pointer",
      padding: "0",
    },
    "& .print": {
      marginRight: ".5rem",
    },
    "& button": {
      width: "8rem",
      textAlign: "center",
      fontSize: "17px",
      backgroundColor: "#89C609",
      fontWeight: "500",
      padding: ".4rem",
    },
    "& .billing-table": {
      overflow: "auto",
    },
    "& .color": {
      color: "#4B95FF",
    },
    "& .section1-text": {
      fontSize: "25px",
      fontWeight: "500",
      textAlign: "center",
    },
    "& .section2-text": {
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "26.63px",
    },
  };
});
