import styled from "styled-components";
import { Row } from "../../flex/styled";
import { useContext } from "react";
import { Context } from "../../../context";

export const TopNavigationWrapper = styled(Row)(() => {
    const { isSideNavigationOpen } = useContext(Context);
    return {
        padding: "var(--basic-padding)",
        alignItems: "center",
        justifyContent: "space-between",
        height: "var(--top-nav-height)",
        boxSizing: "border-box",
        "& .text-flank": {
            gap: 0,
            overflow: "hidden",
            "& h3": {
                marginBlock: 0,
                fontSize: "20px",
                fontWeight: 600,
            },
            "& p": {
                marginBlock: 0,
            }
        },
        "& .icon-flank": {
            overflow: "hidden",
            "@media screen and (max-width: 1024px)": {
                "& .toggle-side-navigation-icon": {
                    display: isSideNavigationOpen ? "none" : "block",
                }
            },
            "@media screen and (min-width: 1025px)": {
                "& .toggle-side-navigation-icon": {
                    display: "none",
                }
            }
        },
        "@media screen and (min-width: 768px)": {
            position: "absolute",
            top: 0,
            left: "var(--side-nav-width)",
            right: "var(--calendar-width)",
        },
        "@media screen and (min-width: 768px) and (max-width: 1024px)": {
            left: 0,
        }
    }
})