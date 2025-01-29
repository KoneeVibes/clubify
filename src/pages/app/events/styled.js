import styled from "styled-components";

export const EventsWrapper = styled("div")(() => {
  return {
    overflow: "hidden",
    marginBottom: "var(--basic-margin)",
    "& .header": {
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
      "& div:first-of-type": {
        width: "100%"
      },
      "@media screen and (max-width: 565px)": {
        gap: "calc(var(--flex-gap)/3)",
        alignItems: "flex-start",
        flexDirection: "column",
      },
      "@media screen and (min-width: 768px) and (max-width: 890px)": {
        gap: "calc(var(--flex-gap)/3)",
        alignItems: "flex-start",
        flexDirection: "column",
      },
      "@media screen and (min-width: 1024px) and (max-width: 1156px)": {
        gap: "calc(var(--flex-gap)/3)",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },

    "& .header .filter": {
      gap: "8px",
      "& span": {
        fontSize: "16px",
        color: "#555",
        fontWeight: "500",
      },
      "@media screen and (max-width: 365px)": {
        gap: "calc(var(--flex-gap)/3)",
        alignItems: "flex-start",
        flexDirection: "column",
      },
    },

    "& .event-cards": {
      display: "grid",
      gap: "calc(var(--flex-gap)/2)",
      gridTemplateColumns: "repeat(1, 1fr)",
      "& .event-card": {
        "& svg": {
          width: "100%",
          height: "100%",
        }
      },
      "@media screen and (min-width: 280px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      "@media screen and (min-width: 425px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      "@media screen and (min-width: 768px)": {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      "@media screen and (min-width: 1280px)": {
        gap: "calc(var(--flex-gap)/1.5)",
      }
    }

  }
})