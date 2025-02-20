import styled from "styled-components";

export const FacilitiesWrapper = styled("div")(() => {
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
            gap: "calc(var(--flex-gap)/4)",
            "& span": {
                fontSize: "16px",
                color: "#555",
                fontWeight: "500",
            },
            "@media screen and (max-width: 425px)": {
                gap: "calc(var(--flex-gap)/3)",
                alignItems: "flex-start",
                flexDirection: "column",
            },
        },

        "& .facility-item": {
            backgroundColor: "#fff",
            padding: "var(--basic-padding)",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            overflow: "hidden",
            "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
            },
            "& .list-item": {
                alignItems: "center",
            },
            "& h3": {
                marginBlock: "0",
            },
            "@media screen and (max-width: 565px)": {
                flexDirection: "column",
            },
            "@media screen and (min-width: 768px) and (max-width: 975px)": {
                flexDirection: "column",
            },
            "@media screen and (min-width: 1025px) and (max-width: 1240px)": {
                flexDirection: "column",
            },
        },

        "& .facility-icon": {
            flex: 0.5,
            overflow: "hidden",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },

        "& .facility-details": {
            flex: 1,
            overflow: "hidden"
        },

        "& .book-facility": {
            flex: 1,
            overflow: "hidden",
            "& button": {
                width: "auto",
                "@media screen and (min-width:565px) and (max-width: 767px)": {
                    float: "right",
                },
                "@media screen and (min-width:974px) and (max-width: 1024px)": {
                    float: "right",
                },
                "@media screen and (min-width:1241px)": {
                    float: "right",
                },
                "& span": {
                    fontSize: "18px",
                    fontWeight: 500,
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                },
            }
        }
    };
});