import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";
import { Row } from "../../../../components/flex/styled";
import { ServicesHistoryWrapper } from "./styled";
import { H1, Span } from "../../../../components/typography/styled";
import { SortIcon } from "../../../../assets";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";
import { Table } from "../../../../components/table";
import { useState } from "react";

export const ServicesHistory = () => {
    const headers = ["Service Name", "Date", "Start Time", "End Time", "Status"];

    const cookies = new Cookies();
    const { profile } = cookies.getAll();

    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setFilter(value);
    }

    const history = [
        {
            serviceName: "Massage",
            date: "01-01-23",
            startTime: "14:00:00",
            endTime: "16:30:00",
            status: "Pending",
        },
        {
            serviceName: "Sauna",
            date: "01-01-23",
            startTime: "14:00:00",
            endTime: "16:30:00",
            status: "Pending",
        },
        {
            serviceName: "Manicure",
            date: "01-01-23",
            startTime: "14:00:00",
            endTime: "16:30:00",
            status: "Pending",
        },
    ]

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
                    className="services-history-header"
                    alignitems="center"
                    justifycontent="space-between"
                >
                    <div className="title">
                        <H1>Services History</H1>
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
                                value={filter}
                                onChange={(e) => handleChange(e)}
                            >
                                <option value="">Date</option>
                                {/* Add additional location options here */}
                            </BaseSelect>
                        </BaseFieldSet>
                    </Row>
            </Row>
            <div
                className="history-table"
            >
                <Table
                        columnTitles={headers}
                        location={"services-history"}
                        rowItems={history}
                />
            </div>
            </ServicesHistoryWrapper>

        </Layout>
    )
}
