import styled from "styled-components";

export const CardWrapper = styled("div")(({ bgcolor, radius, padding }) => {
    return {
        backgroundColor: bgcolor || "transparent",
        borderRadius: radius || "10px",
        padding: padding || "var(--basic-padding)",
        width: "-webkit-fill-available",
        overflow: "hidden",
    }
})