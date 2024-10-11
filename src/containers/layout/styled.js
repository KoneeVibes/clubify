import styled from "styled-components";

export const LayoutWrapper = styled("div")(() => {
    return {

    }
})

export const MainAreaWrapper = styled("div")(() => {
    return {
        padding: "0 var(--basic-padding)",
        "@media screen and (min-width: 768px)": {
            position: "absolute",
            top: "var(--top-nav-height)",
            bottom: 0,
            left: "var(--side-nav-width)",
            right: "var(--calendar-width)",
        },
        "@media screen and (min-width: 768px) and (max-width: 1024px)": {
            left: 0,
        },
    }
})
