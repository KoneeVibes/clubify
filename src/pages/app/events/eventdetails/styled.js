import styled from "styled-components";

export const EventDetailsWrapper = styled("div")(() => {
  return {
    gap: "calc(var(--flex-gap) * 1.5)",
    "& .hero-text": {
      gap: "calc(var(--flexGap)/2)",
      overflow: "hidden",
      padding:
       "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) 0",
    },
    "& .hero-img": {
          flex: 1,
            overflow: "hidden",
            padding: "calc(var(--basic-padding) * 1) var(--basic-padding)",
        },
        "& .hero-img>img": {
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
        },
        "& .background": {
          backgroundColor: "#EFEFEF",
        },
        "& button":{
          width: "8rem",
          textAlign: "center",
          backgroundColor: "#D9D9D9",
          color: "#000000",
          fontSize: "22px",
          fontWeight: "400",
        },
         "& select": {
      padding: "calc(var(--basicpadding) / 2) var(--basicpadding) ",
      width: "21rem",
      outline: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "400",
    },
    "& .top-margin":{
      marginTop: "1rem",
      marginBottom: "1rem",
      justifyContent: "space-around",
      gap: "0",
    },

   "@media screen and (min-width: 1440px)": {
            gap: "calc(var(--flex-gap) * 2)",
        },
    "@media screen and (max-width: 1024px)": {
            "& .hero-img": {
                display: "none",
            },
              "& .hero-text": {
                padding: "var(--basic-padding)",
            },
  },
  };
});
