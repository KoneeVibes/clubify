import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { ServicesWrapper } from "./styled";
import { Column, Row } from "../../../components/flex/styled";
import { H1, H2, Li, P, Span } from "../../../components/typography/styled";
import { Filter } from "../../../assets";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { BaseButton } from "../../../components/button/styled";
import { useNavigate } from "react-router-dom";

export const Services = () => {
    const cookies = new Cookies();
    const { profile } = cookies.getAll();
    const navigate = useNavigate();

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
                    <Column
                        className="service-box"
                    >
                        <div
                            className="service-box-header bars-and-kitchen"
                        >
                            <H2>Bars and Kitchen</H2>
                            <P>Sip, Savor, and Socialize</P>
                        </div>
                        <Column
                            className="service-box-details"
                        >
                            <div
                                className="service-box-detail"
                            >
                                <Row
                                    tocolumn
                                    justifycontent="space-between"
                                >
                                    <ul
                                        className="service-title"
                                    >
                                        <Li>Main Bar</Li>
                                    </ul>
                                    <div
                                        className="book-service"
                                    >
                                        <BaseButton
                                            backgroundcolor={"#4B0082"}
                                            onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                            <P>Ground Floor</P>
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
                                            <P>Aways Open</P>
                                        </div>
                                    </Row>
                                </Column>
                            </div>
                            <div
                                className="service-box-detail"
                            >
                                <Row
                                    tocolumn
                                    justifycontent="space-between"
                                >
                                    <ul
                                        className="service-title"
                                    >
                                        <Li>33 Restaurant</Li>
                                    </ul>
                                    <div
                                        className="book-service"
                                    >
                                        <BaseButton
                                            backgroundcolor={"#4B0082"}
                                            onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                            <P> Floor 1</P>
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
                                            <P>Everyday, 7am - 11pm</P>
                                        </div>
                                    </Row>
                                </Column>
                            </div>
                            <div
                                className="service-box-detail"
                            >
                                <Row
                                    tocolumn
                                    justifycontent="space-between"
                                >
                                    <ul
                                        className="service-title"
                                    >
                                        <Li>Suya Hut</Li>
                                    </ul>
                                    <div
                                        className="book-service"
                                    >
                                        <BaseButton
                                            backgroundcolor={"#4B0082"}
                                            onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                            <P> Outdoor</P>
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
                                            <P>Everyday, 7pm - 12am</P>
                                        </div>
                                    </Row>
                                </Column>
                            </div>
                        </Column>
                    </Column>
                    <Column
                        className="service-box"
                    >
                        <div
                            className="service-box-header massage-and-beauty"
                        >
                            <H2>Massage & Beauty</H2>
                            <P>Relax, Renew, Recharge</P>

                        </div>
                        <Column
                            className="service-box-details"
                        >
                            <div
                                className="service-box-detail"
                            >
                                <Row
                                    tocolumn
                                    justifycontent="space-between"
                                >
                                    <ul
                                        className="service-title"
                                    >
                                        <Li>Massage</Li>
                                    </ul>
                                    <div
                                        className="book-service"
                                    >
                                        <BaseButton
                                            backgroundcolor={"#4B0082"}
                                            onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                            <P>2nd Floor</P>
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
                                            <P>Everyday, 7am - 8pm</P>
                                        </div>
                                    </Row>
                                </Column>
                            </div>
                            <div
                                className="service-box-detail"
                            >
                                <Row
                                    tocolumn
                                    justifycontent="space-between"
                                >
                                    <ul
                                        className="service-title"
                                    >
                                        <Li>Barber Shop</Li>
                                    </ul>
                                    <div
                                        className="book-service"
                                    >
                                        <BaseButton
                                            backgroundcolor={"#4B0082"}
                                            onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                            <P>2nd Floor</P>
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
                                            <P>Everyday, 7am - 8pm</P>
                                        </div>
                                    </Row>
                                </Column>
                            </div>
                        </Column>
                    </Column>
                    <Column
                        className="services-box"
                    >
                        <Column
                            className="service-box"
                        >
                            <div
                                className="service-box-header gymnasium"
                            >
                                <H2>Gymnasium</H2>
                                <P>Fitness Redefined: Embrace the challenge</P>
                            </div>
                            <Column
                                className="service-box-details"
                            >
                                <div
                                    className="service-box-detail"
                                >
                                    <Row
                                        tocolumn
                                        justifycontent="space-between"
                                    >
                                        <ul
                                            className="service-title"
                                        >
                                            <Li>Gym 1</Li>
                                        </ul>
                                        <div
                                            className="book-service"
                                        >
                                            <BaseButton
                                                backgroundcolor={"#4B0082"}
                                                onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                                <P>Ground Floor</P>
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
                                                <P>Everyday, 7am - 5pm</P>
                                            </div>
                                        </Row>
                                    </Column>
                                </div>
                                <div
                                    className="service-box-detail"
                                >
                                    <Row
                                        tocolumn
                                        justifycontent="space-between"
                                    >
                                        <ul
                                            className="service-title"
                                        >
                                            <Li>Gym 2</Li>
                                        </ul>
                                        <div
                                            className="book-service"
                                        >
                                            <BaseButton
                                                backgroundcolor={"#4B0082"}
                                                onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                                <P>Beside Tennis court</P>
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
                                                <P>Everyday, 7am - 5pm</P>
                                            </div>
                                        </Row>
                                    </Column>
                                </div>
                                <div
                                    className="service-box-detail"
                                >
                                    <Row
                                        tocolumn
                                        justifycontent="space-between"
                                    >
                                        <ul
                                            className="service-title"
                                        >
                                            <Li>Tennis Court </Li>
                                        </ul>
                                        <div
                                            className="book-service"
                                        >
                                            <BaseButton
                                                backgroundcolor={"#4B0082"}
                                                onClick={(e) => handleNavigateToBookService(e, Services.id)}
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
                                                <P> Outdoor</P>
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
                                                <P>Everyday, 7pm - 9pm</P>
                                            </div>
                                        </Row>
                                    </Column>
                                </div>
                            </Column>
                        </Column>
                    </Column>
                </Column>
            </ServicesWrapper>
        </Layout>
    )
}
