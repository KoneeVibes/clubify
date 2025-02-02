import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BillingHistoryWrapper } from "./styled";
import { Layout } from "../../../../containers/layout";
import { Row } from "../../../../components/flex/styled";
import { H1, Span } from "../../../../components/typography/styled";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";
import { Filter } from "../../../../assets";
import { Table } from "../../../../components/table";
import { getBillingHistory } from "../../../../utils/apis/getBillingHistory";

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
  const { profile, data } = cookies.getAll();

  const [filter, setFilter] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  useEffect(() => {
    getBillingHistory(data.token)
      .then((detail) => {
        setHistory(detail);
      })
      .catch((err) => {
        console.error("Failed to fetch billing history:", err);
      })
  }, [data]);

  return (
    <Layout
      role={profile?.role}
      title={`Hello ${profile?.role === "administrator"
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
          : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""
          }`
      }
    >
      <BillingHistoryWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="billing-history-header"
        >
          <div
            className="title"
          >
            <H1>Billing History</H1>
          </div>
          <Row
            className="filter"
            alignitems="center"
          >
            <Filter />
            <Span>Filter</Span>
            <BaseFieldSet>
              <BaseSelect
                name="filter"
                value={filter}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Service Type</option>
                {/* Add additional filter options here */}
              </BaseSelect>
            </BaseFieldSet>
          </Row>
        </Row>
        <div
          className="history-table"
        >
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
