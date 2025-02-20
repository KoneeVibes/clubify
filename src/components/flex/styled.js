import styled from "styled-components";

export const BaseFlex = styled.div(
  ({ direction, alignitems, justifycontent, flexwrap, gap }) => ({
    display: "flex",
    flexDirection: direction || "row",
    gap: gap || "var(--flex-gap)",
    alignItems: alignitems || "stretch",
    justifyContent: justifycontent || "flex-start",
    flexWrap: flexwrap || "nowrap",
  })
);

export const Row = styled(BaseFlex)(({ tocolumn }) => {
  return {
    flexDirection: "row",
    "@media screen and (max-width: 1024px)": {
      flexDirection: tocolumn && "column",
    },
  };
});

export const Column = styled(BaseFlex)(({ torow }) => {
  return {
    flexDirection: "column",
    "@media screen and (min-width: 1024px)": {
      flexDirection: torow && "row",
    },
  };
});
