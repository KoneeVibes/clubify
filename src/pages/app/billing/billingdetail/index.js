import { BillingWrapper } from "./styled";
import { Layout } from "../../../../containers/layout/index";
import Cookies from "universal-cookie";
import { CMS } from "../../../../assets";
import { H1, P, Span } from "../../../../components/typography/styled";
import { Column, Row } from "../../../../components/flex/styled";
import { BaseButton } from "../../../../components/button/styled";
import { Table } from "../../../../components/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

export const Billing = () => {
  const headers = ["Serial", "Description", "Price", "Qty", "Total"];

  const cookies = new Cookies();
  const { profile } = cookies.getAll();

  const history = [
    {
      serial: "1",
      description: "Message Service",
      price: "20,000.00",
      qty: "1",
      total: "20,000.00",
    },
  ];

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
      <BillingWrapper>
        <Row
          className="heading-row"
          alignitems={"center"}
          justifycontent={"space-between"}
        >
          <H1>Billing</H1>
          <Row
            className="print-invoice"
            gap={"calc(var(--flex-gap)/4)"}
            alignitems={"center"}
          >
            <FontAwesomeIcon icon={faPrint} />
            <P>Print invoice</P>
          </Row>
        </Row>
        <Column
          className="main-area"
        >
          <Row
            className="invoice-title"
            alignitems={"center"}
            justifycontent={"space-between"}
          >
            <Span>
              Invoice <Span className="invoice-number"> #1245-0001</Span> for #20,000
            </Span>
            <CMS />
          </Row>
          <Row
            className="bill-type"
            alignitems={"center"}
            justifycontent={"space-between"}
          >
            <Span>Billing Type: One Time</Span>
            <BaseButton
              className="completed-button"
            >
              <P>Completed</P>
            </BaseButton>
          </Row>
          <Column
            className="details"
          >
            <Row
              className="detail-header"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>Issued by</Span>
              <Span>Recipient</Span>
            </Row>
            <Row
              className="detail"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>Ikoye Club</Span>
              <Span>Adewale Sarah</Span>
            </Row>
            <Row
              className="detail"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>finances@Ikoyeclub.com</Span>
              <Span>Sarah@example.com</Span>
            </Row>
            <Row
              className="detail"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>Issued on</Span>
              <Span>Due on</Span>
            </Row>
            <Row
              className="detail"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>01 January, 2023</Span>
              <Span>01 January, 2023</Span>
            </Row>
            <Row
              className="detail"
              alignitems={"center"}
              justifycontent={"space-between"}
            >
              <Span>Invoice Detail</Span>
              <Span>Payment Method: Card</Span>
            </Row>
          </Column>
          <div className="billing-table">
            <Table
              columnTitles={headers}
              location={"billing-table"}
              rowItems={history}
            />
          </div>
        </Column>
      </BillingWrapper>
    </Layout>
  );
};
