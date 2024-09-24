import styled from "styled-components";

export const BaseButton = styled.button(({ width, color, borderradius, backgroundcolor }) => {
  return {
    //styles for button should begin below this line.
    textAlign: "center",
    backgroundColor: backgroundcolor || "#4B95FF",
    border: "none",
    color: color || "white",
    borderRadius: borderradius || "1rem",
    width: width || "-webkit-fill-available",
    padding: "calc(var(--basic-padding)/2) var(--basic-padding)",
    fontSize: "1rem",
    cursor: "pointer",
    "@media screen and (max-width: 425px)": {
      width: "-webkit-fill-available",
    },
  };
});
