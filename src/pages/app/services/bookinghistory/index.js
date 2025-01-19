import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";
import { Row } from "../../../../components/flex/styled";
import { ServicesHistoryWrapper } from "./styled";
import { H1, Span } from "../../../../components/typography/styled";
import { Filter, SortIcon } from "../../../../assets";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";

export const ServicesHistory = () => {
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
            {/* Aneminyene, your code goes under here */}

            <ServicesHistoryWrapper>
            <Row
                    className="header"
                    alignitems="center"
                    justifycontent="space-between"
                >
                    <div className="title">
                        <H1>Service History</H1>
                    </div>
                    <Row
                        className="filter"
                        alignitems="center"
                    >
                        <SortIcon />
                        <Span>Sort by</Span>
                        <BaseFieldSet>
                            <BaseSelect
                                name="filter"
                                value={Filter}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Date</option>
                                {/* Add additional location options here */}
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
            </Row>
            </ServicesHistoryWrapper>

        </Layout>
    )
}
