import styled from "styled-components";

export const EventDetailsWrapper = styled("div")(() => {
  return {
    margin: "calc(var(--sectionMargin) * 2) 0",
    padding: "0 var(--pagePadding)",
    gap: "calc(var(--flexGap) * 2)",
    ".hero-img, .hero-text": {
      flex: 1,
    },
    ".hero-img>img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "1rem",
    },
    ".hero-text>h2, .hero-text>h3, .hero-text>p ": {
      marginBlock: 0,
    },
    ".hero-text": {
      gap: "calc(var(--flexGap)/2)",
      overflow: "hidden",
    },
    "@media screen and (min-width: 1024px)": {
      margin: "calc(var(--sectionMargin) * 3) 0",
    },
  };
});
