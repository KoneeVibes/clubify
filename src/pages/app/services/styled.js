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

        "& .service-box-header": {
            backgroundColor: "#3C1985",
            color: "#FFFFFF",
            borderRadius: "15px",
            padding: "var(--basic-padding)",
            backgroundSize: "cover",
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
            "& .service-box-detail>div:first-of-type": {
                marginBlockEnd: "calc(var(--basic-margin)/2)",
                gap: 0,
                alignItems: "flex-start",
                "@media screen and (min-width:1025px)": {
                    gap: "calc(var(--flex-gap)/4)",
                    alignItems: "center",
                }
            },
            "& .service-title": {
                paddingInlineStart: 0,
                marginBlock: 0,
                marginBlockEnd: "calc(var(--flex-gap)/4)",
                listStylePosition: "inside",
                flex: 1,
                overflow: "hidden",
                width: "100%",
                "& li": {
                    whiteSpace: "nowrap"
                },
                "@media screen and (min-width:1025px)": {
                    width: "auto",
                    marginBlockEnd: 0,
                }
            },
            "& .service-details": {
                gap: "calc(var(--flex-gap)/4)",
                paddingInlineStart: "var(--basic-padding)",
                "& .service-detail": {
                    flex: 1,
                    overflow: "hidden",
                    "& p": {
                        marginBlock: 0,
                        fontWeight: 500,
                        fontSize: "18px",
                    },
                    "@media screen and (min-width: 1025px)": {
                        "&:last-child>p": {
                            textAlign: "right"
                        }
                    }
                }
            }
        },

        "& .book-service": {
            flex: 1,
            overflow: "hidden",
            paddingInlineStart: "var(--basic-padding)",
            "@media screen and (min-width:1025px)": {
                paddingInlineStart: 0,
            },
            "& button": {
                width: "auto",
                "@media screen and (min-width:1024px)": {
                    float: "right",
                },
                "& span": {
                    fontSize: "18px",
                    fontWeight: 500,
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                },
            }
        }
    }
})
