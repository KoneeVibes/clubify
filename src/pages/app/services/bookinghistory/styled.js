import styled from "styled-components"

export const ServicesHistoryWrapper = styled("div")(() => {
    return {
        "& h1": {
            fontSize: "24px",
        },
        "& .filter": {
            gap: "calc(var(--flex-gap)/4)",
            "& span": {
                fontSize: "16px"
            },
            "& select": {
                fontSize: "12px",
                padding: "calc(var(--basic-padding)/5)",
                borderRadius: "5px"
            }
        },
        "& .history-table": {
            display: "block",
            overflow: "auto",
            marginBlockEnd: "calc(var(--basic-margin))",
        },
        "@media screen and (max-width: 523px)": {
            "& .services-history-header": {
                gap: "0",
                flexDirection: "column",
                alignItems: "flex-start",
                overflow: "hidden",
                "& .title, & .filter": {
                    width: "100%",
                }
            }
        },
        "@media screen and (min-width: 768px) and (max-width: 860px)": {
            "& .services-history-header": {
                gap: "0",
                flexDirection: "column",
                alignItems: "flex-start"
            }
        },
        "@media screen and (min-width: 1025px) and (max-width: 1169px)": {
            "& .services-history-header": {
                gap: "0",
                flexDirection: "column",
                alignItems: "flex-start"
            }
        },
    }
})