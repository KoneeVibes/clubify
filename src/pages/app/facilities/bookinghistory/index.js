import { useState } from "react";
import Cookies from "universal-cookie";
import { BookingHistoryWrapper } from "./styled";
import { Layout } from "../../../../containers/layout";
import { Row } from "../../../../components/flex/styled";
import { H1, Span } from "../../../../components/typography/styled";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";
import { SortIcon } from "../../../../assets";
import { Table } from "../../../../components/table";

export const BookingHistory = () => {
    const headers = ["Facility Name", "Date", "Start Time", "End Time", "Status"];

    const cookies = new Cookies();
    const { profile } = cookies.getAll();

    const [filter, setFilter] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setFilter(value);
    }

    const history = [
        {
            facilityName: "Meeting Room",
            date: "01-01-23",
            startTime: "14:00:00",
            endTime: "16:30:00",
            status: "Pending",
        },
        {
            facilityName: "Meeting Room",
            date: "01-01-23",
            startTime: "14:00:00",
            endTime: "16:30:00",
            status: "Pending",
        },
        {
            facilityName: "Meeting Room",
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
            <BookingHistoryWrapper>
                <Row
                    alignitems="center"
                    justifycontent="space-between"
                    className="booking-history-header"
                >
                    <div className="title">
                        <H1>Facility Booking History</H1>
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
                        location={"booking-history"}
                        rowItems={history}
                    />
                </div>
            </BookingHistoryWrapper>
        </Layout>
    )
}