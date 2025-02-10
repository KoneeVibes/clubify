import styled from "styled-components";

export const BillWrapper = styled("div")(() => {
  return {
    "& h1": {
      fontSize: "24px",
    },
    "& .Card": {
      backgroundColor: "#3C1985",
      borderRadius: "1rem",
      padding: "calc(var(--basic-padding)/3)",
      color: "#FFFFFF",
      width: "100%",
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
    "& .bill-table": {
      overflow: "auto",
      marginBlockEnd: "calc(var(--basic-margin) * 2)",
    },
    "@media screen and (max-width: 523px)": {
      "& .bill-header": {
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
      "& .bill-header": {
        gap: "0",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    "@media screen and (min-width: 1025px) and (max-width: 1169px)": {
      "& .bill-header": {
        gap: "0",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  };
});
