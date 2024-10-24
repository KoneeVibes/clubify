import styled from "styled-components";

export const CardWrapper = styled("div")(({ bgcolor, radius }) => {
    return {
        backgroundColor: bgcolor || "transparent",
        borderRadius: radius || "10px",
        padding: "var(--basic-padding)",
        width: "-webkit-fill-available",
        overflow: "hidden",
    }
})