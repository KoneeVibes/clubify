import { useState } from "react";
import Cookies from "universal-cookie";
import { BillingSubscriptionWrapper } from "./styled";
import { Layout } from "../../../../containers/layout";
import { Column, Row } from "../../../../components/flex/styled";
import { H1, P, Span } from "../../../../components/typography/styled";
import { BaseFieldSet } from "../../../../components/form/fieldset/styled";
import { BaseSelect } from "../../../../components/form/select/styled";
import { Filter } from "../../../../assets";
import { BaseButton } from "../../../../components/button/styled";

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
        <Column className="main-area">
          <Row alignitems={"center"} justifycontent={"space-between"}>
            <Span className="section-text">Parking</Span>
            <BaseButton className="active-button">
              <P>Active</P>
            </BaseButton>
          </Row>
          <Column gap={"0"}>
            <div>
              <Span>Date Created</Span>
              <P>01 January, 2023</P>
            </div>
            <div>
              <Span>Amount</Span>
              <P>₦18,000</P>
            </div>
            <Row alignitems={"center"} justifycontent={"space-between"}>
              <div>
                <Span>Repeat</Span>
                <P>2pm - 3pm, Every Mon & Wed</P>
              </div>
              <P>Update repeat days</P>
            </Row>
            <div>
              <Span>Next Renewal</Span>
              <P>03 January, 2023</P>
            </div>
            <Row alignitems={"center"} justifycontent={"space-between"}>
              <div>
                <Span>Payment Method</Span>
                <P>Visa 8986</P>
              </div>
              <P>Update Payment Method</P>
            </Row>
          </Column>
        </Column>
        <Row className="button-area">
          <BaseButton className="change-button">
            <P>Change Plan</P>
          </BaseButton>
          <BaseButton className="cancel-button">
            <P>Cancel Subscription</P>
          </BaseButton>
        </Row>
      </BillingSubscriptionWrapper>
    </Layout>
  );
};
