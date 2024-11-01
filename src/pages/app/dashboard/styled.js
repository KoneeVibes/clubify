import styled from "styled-components";

export const DashboardWrapper = styled("div")(() => {
    return {
        "& .banner-box>svg": {
            width: "100%",
            height: "auto",
        },
        "& .main-area": {
            overflow: "hidden",
        },
        "& .cards-box": {
            flex: 0.6,
            overflow: "hidden",
            "& h3": {
                fontWeight: 600,
                fontSize: "15px",
                marginBlock: 0,
            },
            "& p": {
                fontWeight: 400,
                fontSize: "14px",
                marginBlock: 0,
            },
            "& .card": {
                minHeight: "10.9375rem",
                boxSizing: "border-box",
                marginBlock: "var(--basic-margin)",
            }
        },
        "& .carousel-box": {
            flex: 0.4,
            overflow: "hidden",
            marginBlock: "var(--basic-margin)",
            "& h2": {
                marginBlock: 0,
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: 21,
            },
            "& .ad-box": {
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "var(--basic-padding)",
                justifyContent: "space-between",
                "& button": {
                    marginLeft: "auto",
                    marginRight: "auto",
                    overflow: "hidden",
                },
                "& button>span": {
                    fontWeight: 600,
                    fontSize: 21,
                }
            },
            "& .carousel-root, & .carousel, & .slider-wrapper, & .slider, & .slide>.ad-box": {
                minHeight: "31.25rem",
                height: "100% !important",
            }
        },
        "& .card-title": {
            alignItems: "center",
            justifyContent: "space-between",
        },
        "@media screen and (max-width: 1280px)": {
            "& .main-area": {
                gap: 0,
                flexDirection: "column",
            },
            "& .carousel-box": {
                marginBlockStart: 0,
            }
        },
    }
})