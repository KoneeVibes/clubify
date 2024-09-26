import { useContext } from "react";
import { Context } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column, Row } from "../../flex/styled";
import { H3, P } from "../../typography/styled";
import { TopNavigationWrapper } from "./styled";
import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";

export const TopNavigation = ({ title, subTitle }) => {
    const { isSideNavigationOpen, setIsSideNavigationOpen } = useContext(Context);
    const toggleSideNavigation = (e) => {
        e.stopPropagation();
        setIsSideNavigationOpen(!isSideNavigationOpen);
    }
    return (
        <TopNavigationWrapper>
            <Column
                className="text-flank"
            >
                <H3>{title}</H3>
                <P>{subTitle}</P>
            </Column>
            <Row
                className="icon-flank"
            >
                <FontAwesomeIcon
                    icon={isSideNavigationOpen ? faXmark : faBars}
                    className="toggle-side-navigation-icon"
                    onClick={toggleSideNavigation}
                />
                <FontAwesomeIcon icon={faBell} />
            </Row>
        </TopNavigationWrapper>
    )
}