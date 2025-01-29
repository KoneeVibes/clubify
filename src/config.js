import { faCalendarDay, faGear, faGrip, faHouse, faListUl, faMoneyCheck, faPeopleArrows, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdOne from "./assets/adone.svg";

export const sideNavLinks = [
    {
        name: "Dashboard",
        icon: <FontAwesomeIcon icon={faGrip} />,
        url: "/dashboard"
    },
    {
        name: "Membership",
        icon: <FontAwesomeIcon icon={faUserPlus} />,
        url: "/membership"
    },
    {
        name: "Events",
        icon: <FontAwesomeIcon icon={faCalendarDay} />,
        url: "/events"
    },
    {
        name: "Facilities",
        icon: <FontAwesomeIcon icon={faHouse} />,
        url: "/facilities"
    },
    {
        name: "Services",
        icon: <FontAwesomeIcon icon={faListUl} />,
        url: "/services"
    },
    {
        name: "Billing",
        icon: <FontAwesomeIcon icon={faMoneyCheck} />,
        url: "/billing"
    },
    {
        name: "Settings",
        icon: <FontAwesomeIcon icon={faGear} />,
        url: "/settings"
    },
    {
        name: "All Members",
        icon: <FontAwesomeIcon icon={faPeopleArrows} />,
        url: "/allmembers"
    }
];

export const adverts = [
    {
        tag: "World Class Service",
        bg: AdOne,
        url: ""
    },
    {
        tag: "World Class Service",
        bg: AdOne,
        url: ""
    },
    {
        tag: "World Class Service",
        bg: AdOne,
        url: ""
    },
    {
        tag: "World Class Service",
        bg: AdOne,
        url: ""
    },
];