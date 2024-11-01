import { useContext } from "react";
import { Context } from "../../../context/index";
import styled from "styled-components";
import { Column } from "../../flex/styled";

export const SideNavigationWrapper = styled(Column)(() => {
    const { isSideNavigationOpen } = useContext(Context);
    return {
        padding: "var(--basic-padding)",
        position: "fixed",
        top: 0,
        bottom: 0,
        width: "100%",
        boxSizing: "border-box",
        overflowY: "auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#FFFFFF",
        zIndex: 1,
        "& .nav-link": {
            alignItems: "center",
            padding: "0 calc(var(--basic-padding)/2)",
            cursor: "pointer",
            "& svg": {
                flex: "0 0 10%",
                overflow: "hidden",
            },
            "& p": {
                fontSize: "21px",
            },
            "&:hover": {
                backgroundColor: "#3C1985",
                borderRadius: "1rem",
                "& svg, & p": {
                    color: "#FFFFFF",
                }
            },
        },
        "& .logo-box": {
            alignItems: "center",
            justifyContent: "space-between",
            // overflow: "hidden",
            "& .close-side-navigation-button": {
                width: "fit-content",
                padding: "0.5rem",
                borderRadius: "0.3rem",
                backgroundColor: "#3C1985",
            },
            "@media screen and (max-width: 150px)": {
                overflow: "hidden",
            },
            "@media screen and (min-width: 1025px)": {
                "& .close-side-navigation-button": {
                    display: "none",
                }
            }
        },
        "@media screen and (max-width: 150px)": {
            "& .nav-links-box": {
                overflow: "hidden",
            },
        },
        "@media screen and (min-width: 360px)": {
            width: "var(--side-nav-width)",
        },
        "@media screen and (max-width: 1024px)": {
            display: isSideNavigationOpen ? "flex" : "none",
        },
    }
})