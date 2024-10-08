import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Banner } from "../../assets";
import { Card } from "../../components/card";
import { Column, Row } from "../../components/flex/styled";
import { H2, H3, P, Span } from "../../components/typography/styled";
import { Layout } from "../../containers/layout";
import { DashboardWrapper } from "./styled";
import { adverts } from "../../config";
import { BaseButton } from "../../components/button/styled";

export const Dashboard = () => {
    return (
        <Layout
            title={"Hello Sarah"}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
        >
            <DashboardWrapper>
                <div className="banner-box">
                    <Banner />
                </div>
                <Row
                    className="main-area"
                >
                    <div className="cards-box">
                        <Card
                            bgColor={"#D9D9D9"}
                        >
                            <Row className="card-title">
                                <H3>Recently Booked</H3>
                                <P>More</P>
                            </Row>
                        </Card>
                        <Card
                            bgColor={"#D9D9D9"}
                        >
                            <Row className="card-title">
                                <H3>Event Attendance</H3>
                            </Row>
                        </Card>
                        <Card
                            bgColor={"#D9D9D9"}
                        >
                            <Row className="card-title">
                                <H3>Billing History</H3>
                                <P>More</P>
                            </Row>
                        </Card>
                    </div>
                    <div className="carousel-box">
                        <Carousel
                            autoPlay={true}
                            stopOnHover={false}
                            infiniteLoop={true}
                            interval={2000}
                            emulateTouch={false}
                            centerMode={true}
                            centerSlidePercentage={"100%"}
                            dynamicHeight={true}
                            showThumbs={false}
                            showArrows={false}
                            showStatus={false}
                        >
                            {adverts.map((advert, index) => {
                                return (
                                    <Column
                                        key={index}
                                        style={{
                                            backgroundImage: `url(${advert.bg})`
                                        }}
                                        className="ad-box"
                                    >
                                        <H2>{advert.tag}</H2>
                                        <BaseButton
                                            width={"fit-content"}
                                            backgroundcolor={"#F6B553"}
                                        >
                                            <Span>
                                                Book Now
                                            </Span>
                                        </BaseButton>
                                    </Column>
                                )
                            })}
                        </Carousel>
                    </div>
                </Row>
            </DashboardWrapper>
        </Layout>
    )
}