import { useState } from "react";
import Cookies from "universal-cookie";
import { BillingSubscriptionWrapper } from "./styled";
import { Layout } from "../../../containers/layout";
import { Row } from "../../../components/flex/styled";
import { H1, P, Span } from "../../../components/typography/styled";
import { BaseFieldSet } from "../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../components/form/select/styled";
import { Filter } from "../../../assets";
import { BaseButton } from "../../../components/button/styled";

export const BillingSubscription = () => {
  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

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
      <BillingSubscriptionWrapper>
        <Row
          alignitems="center"
          justifycontent="space-between"
          className="billing-subscription-header"
        >
          <div className="title">
            <H1>Manage Billing Subscriptions</H1>
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
        <div className="border">
          <Row
            className="section2"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Span className="section-text">Parking</Span>
            <BaseButton className="active">Active</BaseButton>
          </Row>
          <div className="column">
            <Span className="span">Date Created</Span>
            <P className="paragraph">01 January, 2023</P>
            <Span>Amount</Span>
            <P className="paragraph">₦18,000</P>
          </div>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Span className="span">Repeat</Span>
            <P className="paragraph">Update repeat days</P>
          </Row>
          <div className="column1">
            <P className="paragraph">2pm - 3pm, Every Mon & Wed</P>
            <Span className="span">Next Renewal</Span>
            <P className="paragraph">03 January, 2023</P>
          </div>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Span className="span">Payment Method</Span>
            <P className="paragraph">Update Payment Method</P>
          </Row>
          <P className="paragraph">Visa 8986</P>
        </div>
        <Row className="basebutton">
          <BaseButton className="change">Change Plan</BaseButton>
          <BaseButton className="cancel">Cancel Subscription</BaseButton>
        </Row>
      </BillingSubscriptionWrapper>
    </Layout>
  );
};
