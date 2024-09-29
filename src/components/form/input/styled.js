import styled from "styled-components";

export const BaseInput = styled("input")(({width}) => {
  return {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "normal",
    padding: "calc(var(--cardPadding))",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: width || "-webkit-fill-available",
  };
});
