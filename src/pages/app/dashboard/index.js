import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cookies from "universal-cookie";
import { Banner } from "../../../assets";
import { Card } from "../../../components/card";
import { Column, Row } from "../../../components/flex/styled";
import { H2, H3, P, Span } from "../../../components/typography/styled";
import { Layout } from "../../../containers/layout";
import { DashboardWrapper } from "./styled";
import { adverts } from "../../../config";
import { BaseButton } from "../../../components/button/styled";
import { useEffect, useMemo, useState } from "react";
import { getProfile } from "../../../utils/apis/getProfile";
import { jwtDecode } from "jwt-decode";

export const Dashboard = () => {
    const cookies = useMemo(() => new Cookies(), []);
    const { profile, data } = cookies.getAll() ?? {};
    const { role } = jwtDecode(data.token)
    const [profileDetails, setProfileDetails] = useState({});

    useEffect(() => {
        getProfile(data.token, role)
            .then((detail) => {
                setProfileDetails(detail);
                cookies.set("profile", detail);
            })
            .catch((err) => {
                console.error("Failed to fetch projects:", err);
            })
    }, [cookies, data, role]);

    return (
        <Layout
            role={profileDetails?.role || profile?.role || ""}
            title={`Hello ${data.role === "administrator" ? profileDetails?.firstname || profile?.firstname || "" : profileDetails?.member?.firstname || profile?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profileDetails?.plan?.planName || profile?.plan?.planName || ""}
            fullName={data.role === "administrator" ? `${profileDetails?.firstname || profile?.firstname || ""} ${profileDetails?.lastname || profile?.lastname || ""}` : `${profileDetails?.member?.firstname || profile?.member?.firstname || ""} ${profileDetails?.member?.lastname || profile?.member?.lastname || ""}`}
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