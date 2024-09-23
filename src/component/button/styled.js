import styled from "styled-components";

export const BaseButton = styled.button(({ width, backgroundcolor }) => {
  return {
    //styles for button should begin below this line.
    textAlign: "center",
    backgroundColor: backgroundcolor || "#4B95FF",
    border: "none",
    color: "white",
    borderRadius: "5px",
    width: width || "-webkit-fill-available",
    padding: "calc(var(--cardPadding)/2) var(--cardPadding)",
    fontSize: "1rem",
    cursor: "pointer",
    // "@media screen and (max-width: 425px)": {
    //   width: "-webkit-fill-available",
    // },
  };
});
