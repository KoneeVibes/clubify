import { useState } from "react";
import { EventsHistoryWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";
import { Row } from "../../../../components/flex/styled";
import { H1, Span } from "../../../../components/typography/styled";
import { SortIcon } from "../../../../assets";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";
import { Table } from "../../../../components/table";

export const EventsHistory = () => {
  const headers = ["Event Name", "Date", "Location", "RSVP"];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const history = [
    {
      eventName: "Annual Conference 2022",
      date: "01-01-23",
      location: "Conference Room 302",
      RSVP: "Yes",
    },
    {
      eventName: "Annual Conference 2022",
      date: "01-01-23",
      location: "Conference Room 302",
      RSVP: "Yes",
    },
    {
      eventName: "Annual Conference 2022",
      date: "01-01-23",
      location: "Conference Room 302",
      RSVP: "Yes",
    },
  ];

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
      <EventsHistoryWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="event-history-header"
        >
          <div className="title">
            <H1>Events History</H1>
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
            location={"event-history"}
            rowItems={history}
          />
        </div>
      </EventsHistoryWrapper>
    </Layout>
  )
}