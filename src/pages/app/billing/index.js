import { useState } from "react";
import Cookies from "universal-cookie";
import { BillWrapper } from "./styled";
import { Layout } from "../../../containers/layout";
import { Row } from "../../../components/flex/styled";
import { H1, P, Span } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { Filter } from "../../../assets";
import { Table } from "../../../components/table";
import { BaseButton } from "../../../components/button/styled";
// import { getBillingPlan } from "../../../../utils/apis/getBillingPlan";
// import { BaseButton } from "../../../../components/button/styled";

export const Bill = () => {
  const headers = [
    "Type",
    "Bill",
    "Date",
    "Amount",
    "DueDate",
    "Status",
    "Action",
  ];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const plan = [
    {
      Type: "one-time",
      Bill: "Message",
      Date: "01-01-2023",
      Amount: "₦25,000",
      DueDate: "01-01-2024",
      Status: "completed",
      Action: "",
    },
    {
      Type: "one-time",
      Bill: "Message",
      Date: "01-01-2023",
      Amount: "₦25,000",
      DueDate: "01-01-2024",
      Status: "completed",
      Action: "",
    },
    {
      Type: "one-time",
      Bill: "Message",
      Date: "01-01-2023",
      Amount: "₦25,000",
      DueDate: "01-01-2024",
      Status: "completed",
      Action: "",
    },
  ];

  const [filter, setFilter] = useState("");

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
      <BillWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="bill-header"
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

        <Row className="event-cards" justifycontent="space-between">
          <div className="Card">
            <P>Current Membership Plan</P>
            <Span>₦45,000.00</Span>
            <P>Gold Membership</P>
            <BaseButton>Change Plan</BaseButton>
          </div>
          <div className="Card">
            <P>Next Payment</P>
            <Span>₦5,000.00</Span>
            <P>due May 13, 2022</P>
            <BaseButton>Manage Subscriptions</BaseButton>
          </div>
        </Row>

        <div className="bill-table">
          <Table columnTitles={headers} location={"billing"} rowItems={plan} />
        </div>
      </BillWrapper>
    </Layout>
  );
};
