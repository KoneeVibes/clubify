import styled from "styled-components";

export const FacilitiesWrapper = styled("div")(() => {
  return {
    overflow:"hidden",

    "& .header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",

      "& h1": {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
      },

      "& fieldset": {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        },
      "& select": {
      padding: "calc(var(--basic-padding)/5)",
      borderRadius: "10px",
    },
    },

    "& .header .filter": {
      display: "flex",
      alignItems: "center",
      gap: "8px",

      "& span": {
        fontSize: "16px",
        color: "#555",
        fontWeight: "500",
      },
    },

    "& .facilities-list": {
      display: "flex",
      flexDirection: "column",
      gap: "var(--flex-gap)",
    },

    "& .facility-item": {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "var(--basic-padding)",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      overflow:"hidden",
      justifyContent:"space-between",

      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
      },

      "& .list-item": {
        alignItems: "center",
      },
      "& h3":{
        marginBlock:"0",
      },
    },

    "& .proceed-button": {
      backgroundColor: "#4B0082",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "8px",
      padding: "10px 20px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      width: "auto",
      overflow:"hidden",

      "&:hover": {
        backgroundColor: "#2c1061",
        transform: "scale(1.05)",
      },
    },
  };
});
