import styled from "styled-components";

export const TableWrapper = styled("table")(() => {
  return {
    width: "100%",
    backgroundColor: "transparent",
    borderCollapse: "separate",
    borderSpacing: 0,
    "& th": {
      textAlign: "left",
      textTransform: "capitalize",
      padding:
        "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding)/4)",
      minWidth: "150px",
      userSelect: "none",
    },
    "& td": {
      textAlign: "left",
      border: "1px solid #5B5B5B",
      padding: "var(--basic-padding)",
      minWidth: "150px",
      color: "#000000",
      backgroundColor: "#EFEFEF",
    },
    "& tbody>tr:first-of-type>td:first-of-type": {
      borderTopLeftRadius: "5px",
    },
    "& tbody>tr:first-of-type>td:last-of-type": {
      borderTopRightRadius: "5px",
    },
    "& tbody>tr:last-of-type>td:first-of-type": {
      borderBottomLeftRadius: "5px",
    },
    "& tbody>tr:last-of-type>td:last-of-type": {
      borderBottomRightRadius: "5px",
    },
  };
});
