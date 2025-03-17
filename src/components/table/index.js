import { Fragment } from "react";
import { Td, Th } from "../typography/styled";
import { TableWrapper } from "./styled";

export const Table = ({ columnTitles, rowItems, location }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          {columnTitles.map((columnTitle, index) => {
            return <Th key={index}>{columnTitle}</Th>;
          })}
        </tr>
      </thead>
      <tbody>
        {rowItems.map((rowItem, index) => {
          return (
            <tr key={index}>
              {location === "booking-history" && (
                <Fragment>
                  <Td>{rowItem.facilityName || ""}</Td>
                  <Td>{rowItem.date || ""}</Td>
                  <Td>{rowItem.startTime || ""}</Td>
                  <Td>{rowItem.endTime || ""}</Td>
                  <Td>{rowItem.status || ""}</Td>
                </Fragment>
              )}
              {location === "event-history" && (
                <Fragment>
                  <Td>{rowItem.eventName || ""}</Td>
                  <Td>{rowItem.date || ""}</Td>
                  <Td>{rowItem.location || ""}</Td>
                  <Td>{rowItem.RSVP || ""}</Td>
                </Fragment>
              )}
              {location === "services-history" && (
                <Fragment>
                  <Td>{rowItem.serviceName || ""}</Td>
                  <Td>{rowItem.date || ""}</Td>
                  <Td>{rowItem.startTime || ""}</Td>
                  <Td>{rowItem.endTime || ""}</Td>
                  <Td>{rowItem.status || ""}</Td>
                </Fragment>
              )}
              {location === "billing-history" && (
                <Fragment>
                  <Td>{rowItem.subscription || ""}</Td>
                  <Td>{rowItem.date || ""}</Td>
                  <Td>{rowItem.amount || ""}</Td>
                  <Td>{rowItem.renewal || ""}</Td>
                  <Td>{rowItem.status || ""}</Td>
                  <Td>{rowItem.action || ""}</Td>
                </Fragment>
              )}
              {location === "billing-table" && (
                <Fragment>
                  <Td>{rowItem.serial || ""}</Td>
                  <Td>{rowItem.description || ""}</Td>
                  <Td>{rowItem.price || ""}</Td>
                  <Td>{rowItem.qty || ""}</Td>
                  <Td>{rowItem.total || ""}</Td>
                </Fragment>
              )}
            </tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};
