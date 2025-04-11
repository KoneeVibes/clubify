import styled from "styled-components";
import { Column } from "../../../../components/flex/styled";

export const UpgradePlanWrapper = styled(Column)(() => {
    return {
        overflow: "hidden",
        "& .title": {
            alignItems: "center",
            gap: "calc(var(--flex-gap) * 2)",
            marginBlock: "calc(var(--basic-margin) / 2)",
            "& h1": {
                fontWeight: 400,
                fontSize: "32px",
                marginBlock: 0,
            },
            "@media screen and (max-width: 1280px)": {
                flexDirection: "column",
                gap: "calc(var(--flex-gap) / 2)",
                "& h1": {
                    textAlign: "center"
                },
            }
        },
        "& .title-text": {
            flex: 0.75,
        },
        "& .upload-button": {
            overflow: "hidden",
            flex: 0.25,
            "& button": {
                "& span": {
                    fontSize: "15px",
                    fontWeight: 500,
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                    width: "100%",
                    display: "inline-block"
                },
            }
        },
        "& .highlight-purple": {
            color: "#3C1985",
            display: "inline-block",
            fontWeight: "inherit",
            fontSize: "inherit",
            overflow: "unset",
        },
        "& .card": {
            flex: 1,
            "& .card-header": {
                display: "flex",
                justifyContent: "center",
            },
            "& h3": {
                marginBlock: 0
            }
        },
        "& p": {
            fontSize: "12px",
        },
        "& li": {
            fontSize: "12px",
            textAlign: "left",
            overflow: "unset",

        },
        "& .amount": {
            fontWeight: 700,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.5) ",
            marginBlock: "calc(var(--basic-margin)/1.5)"
        },
        "& .card-row": {
            marginBlockEnd: "calc(var(--basic-margin) * 2)",
        },
        "@media screen and (max-width: 1440px)": {
            "& .card-row": {
                flexDirection: "column"
            },
        }
    };
});