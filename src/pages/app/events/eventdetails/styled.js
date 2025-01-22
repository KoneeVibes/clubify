import styled from "styled-components";

export const EventDetailsWrapper = styled("div")(() => {
  return {
    gap: "calc(var(--flex-gap) * 1.5)",
    "& .hero-text": {
      gap: "calc(var(--flexGap)/2)",
      flex: 1,
      overflow: "hidden",
      padding:
        "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) 0",
    },
    "& .hero-img": {
      flex: 1,
      overflow: "hidden",
      padding:
        "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) 0",
    },
    // ".hero-text>h2, .hero-text>h3, .hero-text>p ": {
    //   marginBlock: 0,
    // },
    ".hero-text": {},
    "@media screen and (min-width: 1024px)": {
      margin: "calc(var(--sectionMargin) * 3) 0",
    },
  };
});
