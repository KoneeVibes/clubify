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
import { useEffect, useMemo, useState } from "react";
import { getProfile } from "../../utils/apis/getProfile";
import Cookies from "universal-cookie";

export const Dashboard = () => {
    const cookies = useMemo(() => new Cookies(), []);
    const { role, token } = cookies.get("data");
    const [profileDetails, setProfileDetails] = useState({});
    
    useEffect(() => {
        getProfile(token, role)
            .then((detail) => {
                setProfileDetails(detail);
                cookies.set("profile", detail);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
            })
    }, [cookies, token, role]);

    return (
        <Layout
            role={profileDetails?.role}
            title={`Hello ${role === "administrator" ? profileDetails?.firstname || "" : profileDetails?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profileDetails?.plan?.planName || ""}
            fullName={role === "administrator" ? `${profileDetails?.firstname || ""} ${profileDetails?.lastname || ""}` : `${profileDetails?.member?.firstname || ""} ${profileDetails?.member?.lastname || ""}`}
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
                            bgcolor={"#D9D9D9"}
                        >
                            <Row className="card-title">
                                <H3>Recently Booked</H3>
                                <P>More</P>
                            </Row>
                        </Card>
                        <Card
                            bgcolor={"#D9D9D9"}
                        >
                            <Row className="card-title">
                                <H3>Event Attendance</H3>
                            </Row>
                        </Card>
                        <Card
                            bgcolor={"#D9D9D9"}
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