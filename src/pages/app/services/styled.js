import styled from "styled-components";

export const ServicesWrapper = styled("div")(() => {
    return {
        overflow: "hidden",
        marginBottom: "var(--basic-margin)",
        "& .header": {
            marginBottom: "20px",
            "& h1": {
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
            },
            "& fieldset": {
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
            },
            "& select": {
                padding: "calc(var(--basic-padding)/5)",
                borderRadius: "10px",
            },
            "& div:first-of-type": {
                width: "100%"
            },
            "@media screen and (max-width: 565px)": {
                gap: "calc(var(--flex-gap)/3)",
                alignItems: "flex-start",
                flexDirection: "column",
            },
            "@media screen and (min-width: 768px) and (max-width: 890px)": {
                gap: "calc(var(--flex-gap)/3)",
                alignItems: "flex-start",
                flexDirection: "column",
            },
            "@media screen and (min-width: 1024px) and (max-width: 1156px)": {
                gap: "calc(var(--flex-gap)/3)",
                alignItems: "flex-start",
                flexDirection: "column",
            },
        },

        "& .header .filter": {
            gap: "8px",
            "& span": {
                fontSize: "16px",
                color: "#555",
                fontWeight: "500",
            },
            "@media screen and (max-width: 365px)": {
                gap: "calc(var(--flex-gap)/3)",
                alignItems: "flex-start",
                flexDirection: "column",
            },
        },
        "& .banner-box>svg": {
            width: "100%",
            height: "auto",
        },
    }
})
