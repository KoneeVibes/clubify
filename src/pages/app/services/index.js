import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { ServicesWrapper } from "./styled";
import { Row } from "../../../components/flex/styled";
import { H1, Span } from "../../../components/typography/styled";
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
<<<<<<< HEAD
                
                
                 
                 

=======
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
                                <option value="">Location</option>
                                {/* Add additional location options here */}
                            </BaseSelect>
                        </BaseFieldSet>
                        <BaseFieldSet>
                            <BaseSelect name="capacity">
                                <option value="">Capacity</option>
                                {/* Add additional capacity options here */}
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
                </Row>
>>>>>>> de2488d29f4a19cbd4498958a8cb096b48973126
            </ServicesWrapper>
        </Layout>
    )
}
