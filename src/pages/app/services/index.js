import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { ServicesWrapper } from "./styled";
import { Column, Row } from "../../../components/flex/styled";
import { H1, H2, P, Span } from "../../../components/typography/styled";
import { Filter } from "../../../assets";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";

export const Services = () => {
    const cookies = new Cookies();
    const { profile } = cookies.getAll();

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
                    <div
                        className="service-box"
                    >
                        <div
                            className="service-box-header bars-and-kitchen"
                        >
                            <H2>Bars and Kitchen</H2>
                            <P>Sip, Savor, and Socialize</P>
                        </div>
                        <div
                            className="service-box-details"
                        >

                        </div>
                    </div>
                    <div
                        className="service-box"
                    >
                        <div
                            className="service-box-header massage-and-beauty"
                        >
                            <H2>Massage & Beauty</H2>
                            <P>Relax, Renew, Recharge</P>

                        </div>
                        <div
                            className="service-box-details"
                        >

                        </div>
                    </div>
                    <div
                        className="service-box"
                    >
                        <div
                            className="service-box-header gymnasium"
                        >
                            <H2>Gymnasium </H2>
                            <P>Fitness Redefined: Embrace the Challenge</P>
                        </div>
                        <div
                            className="service-box-details"
                        >

                        </div>
                    </div>
                </Column>
            </ServicesWrapper>
        </Layout>
    )
}
