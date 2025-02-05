import { useState } from "react";
import Cookies from "universal-cookie";
import { BillingWrapper } from "./styled";
import { Layout } from "../../../containers/layout";
import { Row } from "../../../components/flex/styled";
import { H1, Span } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { Filter } from "../../../assets";
import { Table } from "../../../components/table";
// import { getBillingPlan } from "../../../../utils/apis/getBillingPlan";
// import { BaseButton } from "../../../../components/button/styled";

export const Billing = () => {
  const headers = [
    "Type",
    "Bill",
    "Date",
    "Amount",
    "Due Date",
    "Status",
    "Action",
  ];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const [filter, setFilter] = useState("");
  const [plan] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  // useEffect(() => {
  //   getBillingPlan(data.token)
  //     .then((detail) => {
  //       setPlan(detail);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch billing history:", err);
  //     });
  // }, [data]);

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
      <BillingWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="billing-header"
        >
          <div className="title">
            <H1> Billing </H1>
          </div>
          <Row className="filter" alignitems="center">
            <Filter />
            <Span>Filter</Span>
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
        <Row>
          <div className="event-cards">
            <div
              className="event-card"
              // onClick={handleNavigateToEventDetails}
            ></div>
            <div
              className="event-card"
              // onClick={handleNavigateToEventDetails}
            ></div>
          </div>
        </Row>
        <div className="billing-table">
          <Table columnTitles={headers} location={"billing"} rowItems={plan} />
        </div>
      </BillingWrapper>
    </Layout>
  );
};
