import { Fragment, useContext, useEffect, useRef } from "react";
import { Logo } from "../../../assets";
import { sideNavLinks } from "../../../config";
import { Column, Row } from "../../flex/styled";
import { P } from "../../typography/styled";
import { SideNavigationWrapper } from "./styled";
import { Context } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BaseButton } from "../../button/styled";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export const SideNavigation = () => {
    const cookies = new Cookies();
    const { profile } = cookies.getAll() ?? {};

    const roleBasedSideNavLinks = profile?.role === "administrator"
        ? sideNavLinks
        : sideNavLinks.filter((link) => link.name !== "All Members");

    const navigate = useNavigate();
    const sideNavigationRef = useRef(null);
    const { isSideNavigationOpen, setIsSideNavigationOpen } = useContext(Context);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isSideNavigationOpen && sideNavigationRef.current && !sideNavigationRef.current.contains(e.target)) {
                setIsSideNavigationOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [isSideNavigationOpen, setIsSideNavigationOpen]);

    const closeSideNavigation = (e) => {
        e.stopPropagation();
        setIsSideNavigationOpen(false);
    }

    return (
        <SideNavigationWrapper
            ref={sideNavigationRef}
        >
            <Row
                className="logo-box"
            >
                <Logo />
                <BaseButton
                    className="close-side-navigation-button"
                    onClick={closeSideNavigation}
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                    />
                </BaseButton>
            </Row>
            <Column
                className="nav-links-box"
            >
                {roleBasedSideNavLinks.map((sideNavLinks, index) => {
                    return (
                        <Row
                            key={index}
                            className="nav-link"
                            onClick={() => navigate(sideNavLinks.url)}
                        >
                            <Fragment>{sideNavLinks.icon}</Fragment>
                            <P>{sideNavLinks.name}</P>
                        </Row>
                    )
                })}
            </Column>
        </SideNavigationWrapper>
    )
}