import { BillingWrapper } from "./styled";
import { Layout } from "../../../containers/layout/index";
import Cookies from "universal-cookie";
import { CMS } from "../../../assets";
import { P, Span } from "../../../components/typography/styled";
import { Row } from "../../../components/flex/styled";
import { BaseButton } from "../../../components/button/styled";
import { Table } from "../../../components/table";

export const Billing = () => {
  const headers = ["Serial", "Description", "Price", "Qty", "Total"];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const history = [
    {
      Serial: "1",
      Description: "Message Service",
      Price: "20,000.00",
      Qty: "1",
      Total: "20,000.00",
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
      <BillingWrapper tocolumn={true}>
        <Row className="heading-row" justifycontent={"space-between"}>
          <Span className="billing">Billing</Span>
          <Span className="print-invoice"> print invoice</Span>
        </Row>

        <div className="border">
          <Row
            className="section1"
            justifycontent={"space-between"}
            alignItems={"center"}
          >
            <Span>Invoice #1245-0001 for #20,000</Span>
            <CMS />
          </Row>
          <Row
            className="section2"
            justifycontent={"space-between"}
            alignItems={"center"}
          >
            <Span>Billing Type: One Time</Span>
            <BaseButton>Completed</BaseButton>
          </Row>

          <div className="border2">
            <Row className="section3" justifycontent={"space-between"}>
              <Span>Issued by</Span>
              <Span>Recipient</Span>
            </Row>

            <Row justifycontent={"space-between"}>
              <Span>Ikoye Club</Span>
              <Span>Adewale Sarah</Span>
            </Row>

            <Row justifycontent={"space-between"}>
              <P>finances@Ikoyeclub.com</P>
              <P>Sarah@example.com</P>
            </Row>

            <Row className="section4" justifycontent={"space-between"}>
              <Span>Issued on</Span>
              <Span>Due on</Span>
            </Row>

            <Row justifycontent={"space-between"}>
              <Span>01 January, 2023</Span>
              <Span>01 January, 2023</Span>
            </Row>
          </div>
          <Row className="detail-section" justifycontent={"space-between"}>
            <Span>Invoice Detail</Span>
            <Span>Payment Method: Card</Span>
          </Row>
          <div className="billing-table">
            <Table
              columnTitles={headers}
              location={"billing"}
              rowItems={history}
            />
          </div>
        </div>
      </BillingWrapper>
    </Layout>
  );
};
