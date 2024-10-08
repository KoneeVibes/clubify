import styled from "styled-components";

export const BaseSelect = styled("select")(() => {
    return {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "normal",
        padding: "calc(var(--cardPadding))",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "-webkit-fill-available",
    };
});
