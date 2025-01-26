import styled from "styled-components";

export const BillingWrapper = styled("div")(() => {
  return {
    "& .border": {
      border: "2px solid black",
      overflow: "hidden",
      padding: "calc(var(--basic-padding) * 1) ",
      borderRadius: "1.2rem",
    },
    "& .border2": {
      padding: "0 calc(var(--basic-padding) * .5) ",
      marginTop: "1.5rem",
    },
    "& .section3": {
      marginBottom: "1rem",
    },
    "& .detail-section": {
      marginTop: "1rem",
      borderBottom: "2px solid grey",
    },
    // "& .section1": {
    //   "& svg": {
    //     position: "relative",
    //     width: "5rem",
    //   },
    // },
    "& .billing": {
      fontSize: "24px",
      fontWeight: "500",
    },
    "& .print-invoice": {
      fontSize: "16px",
      fontWeight: "400",
    },
    "& button": {
      width: "10rem",
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "400",
    },
  };
});
