import { faCalendarDay, faGear, faGrip, faHouse, faListUl, faMoneyCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sideNavLinks = [
    {
        name: "Dashboard",
        icon: <FontAwesomeIcon icon={faGrip} />,
        url: ""
    },
    {
        name: "Membership",
        icon: <FontAwesomeIcon icon={faUserPlus} />,
        url: ""
    },
    {
        name: "Events",
        icon: <FontAwesomeIcon icon={faCalendarDay} />,
        url: ""
    },
    {
        name: "Facilities",
        icon: <FontAwesomeIcon icon={faHouse} />,
        url: ""
    },
    {
        name: "Services",
        icon: <FontAwesomeIcon icon={faListUl} />,
        url: ""
    },
    {
        name: "Billing",
        icon: <FontAwesomeIcon icon={faMoneyCheck} />,
        url: ""
    },
    {
        name: "Settings",
        icon: <FontAwesomeIcon icon={faGear} />,
        url: ""
    },

]