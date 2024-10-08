import styled from "styled-components";

export const CardWrapper = styled("div")(({ bgColor, radius }) => {
    return {
        backgroundColor: bgColor || "transparent",
        borderRadius: radius || "10px",
        padding: "var(--basic-padding)",
        width: "-webkit-fill-available",
        overflow: "hidden",
    }
})