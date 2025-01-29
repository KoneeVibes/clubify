import { useNavigate } from "react-router-dom";
import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { ServicesWrapper } from "./styled";
import { Column, Row } from "../../../components/flex/styled";
import { H1, H2, Li, P, Span } from "../../../components/typography/styled";
import { Filter } from "../../../assets";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { BaseButton } from "../../../components/button/styled";
import barsandkitchen from "../../../assets/images/barsandkitchen.svg";
import massageandbeauty from "../../../assets/images/massageandbeauty.svg"
import gymnasium from "../../../assets/images/gymnasium.svg"


export const Services = () => {
    const cookies = new Cookies();
    const { profile } = cookies.getAll();
    const navigate = useNavigate();

    const simulatedData = [
        {
            categoryId: 1,
            categoryTitle: "Bars and Kitchen",
            categorySubtitle: "Sip, Savor, and Socialize",
            bg: barsandkitchen,
            services: [
                {
                    id: 1,
                    name: "Main Bar",
                    location: "Ground Floor",
                    operatingHours: "Always Open"
                },
                {
                    id: 2,
                    name: "33 Restaurant",
                    location: "Floor 1",
                    operatingHours: "Everyday, 7am - 11pm"
                },
                {
                    id: 3,
                    name: "Suya Hut",
                    location: "Outdoor",
                    operatingHours: "Everyday, 7am - 12am"
                },
            ]
        },
        {
            categoryId: 2,
            categoryTitle: "Massage & Beauty",
            categorySubtitle: "Relax, Renew,Recharge",
            bg: massageandbeauty,
            services: [
                {
                    id: 1,
                    name: "Massage",
                    location: "2nd Floor",
                    operatingHours: "Everyday, 7am - 8pm"
                },
                {
                    id: 2,
                    name: "Barber Shop",
                    location: "2nd Floor",
                    operatingHours: "Everyday, 7am - 8pm"
                },
            ]
        },
        {
            categoryId: 3,
            categoryTitle: "Gymnasium",
            categorySubtitle: "Fitness Redefined: Embrace the Challenge",
            bg: gymnasium,
            services: [
                {
                    id: 1,
                    name: "Gym 1",
                    location: "Ground Floor",
                    operatingHours: "Everyday, 7am - 5pm"
                },
                {
                    id: 2,
                    name: "Gym 2",
                    location: "Beside Tennis court ",
                    operatingHours: "Everyday, 7am - 5pm"
                },
                {
                    id: 3,
                    name: "Tennis Court",
                    location: "Outdoor",
                    operatingHours: "Everyday, 7am - 9pm"
                },
            ]
        }
    ]

    const handleNavigateToBookService = (e, id) => {
        e.preventDefault();
        return navigate(`/services/booking/${id}`)
    };

    return (
        <Layout
            role={profile?.role}
            title={`Hello ${profile.role === "administrator" ? profile?.firstname || "" : profile?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profile?.plan?.planName || ""}
            fullName={profile?.role === "administrator" ? `${profile?.firstname || ""} ${profile?.lastname || ""}` : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""}`}
        >
            <ServicesWrapper>
                <Row
                    className="header"
                    alignitems="center"
                    justifycontent="space-between"
                >
                    <div>
                        <H1>Services</H1>
                    </div>
                    <Row
                        className="filter"
                        alignitems="center"
                    >
                        <Filter />
                        <Span>Filter</Span>
                        <BaseFieldSet>
                            <BaseSelect name="location">
                                <option value="">Service type</option>
                                {/* Add additional location options here */}
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
                </Row>
                <Column
                    className="services-box"
                >
                    {simulatedData.map((serviceData, index) => {
                        return (
                            <Column
                                key={index}
                                className="service-box"
                            >
                                <div
                                    style={{ backgroundImage: `url(${serviceData.bg})` }}
                                    className="service-box-header"
                                >
                                    <H2>{serviceData.categoryTitle}</H2>
                                    <P>{serviceData.categorySubtitle}</P>
                                </div>
                                <Column
                                    className="service-box-details"
                                >
                                    {serviceData.services.map((service, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="service-box-detail"
                                            >
                                                <Row
                                                    tocolumn
                                                    justifycontent="space-between"
                                                >
                                                    <ul
                                                        className="service-title"
                                                    >
                                                        <Li>{service.name}</Li>
                                                    </ul>
                                                    <div
                                                        className="book-service"
                                                    >
                                                        <BaseButton
                                                            backgroundcolor={"#4B0082"}
                                                            onClick={(e) => handleNavigateToBookService(e, service.id)}
                                                        >
                                                            <Span>
                                                                Book
                                                            </Span>
                                                        </BaseButton>
                                                    </div>
                                                </Row>
                                                <Column
                                                    className="service-details"
                                                >
                                                    <Row
                                                        tocolumn={true}
                                                        gap={"calc(var(--flex-gap)/4)"}
                                                        justifycontent={"space-between"}
                                                    >
                                                        <div
                                                            className="service-detail"
                                                        >
                                                            <P>Location</P>
                                                        </div>
                                                        <div
                                                            className="service-detail"
                                                        >
                                                            <P>{service.location}</P>
                                                        </div>
                                                    </Row>
                                                    <Row
                                                        tocolumn={true}
                                                        gap={"calc(var(--flex-gap)/4)"}
                                                        justifycontent={"space-between"}
                                                    >
                                                        <div
                                                            className="service-detail"
                                                        >
                                                            <P>Operating Hours</P>
                                                        </div>
                                                        <div
                                                            className="service-detail"
                                                        >
                                                            <P>{service.operatingHours}</P>
                                                        </div>
                                                    </Row>
                                                </Column>
                                            </div>
                                        )
                                    })}
                                </Column>
                            </Column>
                        )
                    })}
                </Column>
            </ServicesWrapper>
        </Layout>
    )
}
