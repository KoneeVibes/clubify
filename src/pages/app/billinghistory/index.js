import { useState } from "react";
import Cookies from "universal-cookie";
import { BillingHistoryWrapper } from "./styled";
import { Layout } from "../../../containers/layout";
import { Row } from "../../../components/flex/styled";
import { H1, Span } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { Filter } from "../../../assets";
import { Table } from "../../../components/table";

export const BillingHistory = () => {
  const headers = [
    "Subscription",
    "Date Created",
    "Amount",
    "Next Renewal",
    "Status",
    "Action",
  ];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const history = [
    {
      Subscription: "Meeting Room",
      date: "01-01-23",
      Amount: "14:00:00",
      renewal: "16:30:00",
      Status: "Pending",
      Action: "",
    },
    {
      Subscription: "Meeting Room",
      date: "01-01-23",
      Amount: "14:00:00",
      renewal: "16:30:00",
      Status: "Pending",
      Action: "",
    },
    {
      Subscription: "Meeting Room",
      date: "01-01-23",
      Amount: "14:00:00",
      renewal: "16:30:00",
      Status: "Pending",
      Action: "",
    },
  ];

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${
        profile?.role === "administrator"
          ? profile?.firstname || ""
          : profile?.member?.firstname || ""
      }`}
      subTitle={new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        weekday: "long",
      })}
      plan={profile?.plan?.planName || ""}
      fullName={
        profile?.role === "administrator"
          ? `${profile?.firstname || ""} ${profile?.lastname || ""}`
          : `${profile?.member?.firstname || ""} ${
              profile?.member?.lastname || ""
            }`
      }
    >
      <BillingHistoryWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="billing-history-header"
        >
          <div className="title">
            <H1>Billing History</H1>
          </div>
          <Row className="filter" alignitems="center">
            <Filter />
            <Span>filter</Span>
            <BaseFieldSet>
              <BaseSelect
                name="filter"
                value={filter}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Service Type</option>
                {/* Add additional location options here */}
              </BaseSelect>
            </BaseFieldSet>
          </Row>
        </Row>
        <div className="history-table">
          <Table
            columnTitles={headers}
            location={"billing-history"}
            rowItems={history}
          />
        </div>
      </BillingHistoryWrapper>
    </Layout>
  );
};
