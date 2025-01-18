import styled from "styled-components";
import barsandkitchen from "../../../assets/images/barsandkitchen.svg";
import massageandbeauty from "../../../assets/images/massageandbeauty.svg"
import gymnasium from "../../../assets/images/gymnasium.svg"

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
        "& .service-box-header": {
            backgroundColor: "#3C1985",
            color: "#FFFFFF",
            borderRadius: "15px",
            padding: "var(--basic-padding)",
            backgroundSize: "40% auto",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            "& h2": {
                fontSize: "42px",
                marginBlock: 0
            },
            "& p": {
                fontSize: "22px",
                fontWeight: 500,
                marginBlock: 0
            },
        },
        "& .service-box-details": {
            paddingInlineStart: "var(--basic-padding)",
            "& .service-title": {
                paddingInlineStart: 0,
                marginBlockStart: 0,
                listStylePosition: "inside",
            },
            "& .service-details": {
                gap: "calc(var(--flex-gap)/4)",
                paddingInlineStart: "var(--basic-padding)",
                "& .service-detail>p": {
                    marginBlock: 0,
                    fontWeight: 500,
                    fontSize: "18px"
                }
            }
        },
        "& .bars-and-kitchen": {
            backgroundImage: `url(${barsandkitchen})`
        },
        "& .massage-and-beauty": {
            backgroundImage: `url(${massageandbeauty})`,
        },
        "& .gymnasium": {
            backgroundImage: `url(${gymnasium})`,
        }
    }
})
