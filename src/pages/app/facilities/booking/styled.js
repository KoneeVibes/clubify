import styled from "styled-components";
import { Row } from "../../../../components/flex/styled";

export const BookingWrapper = styled("div")(() => ({
  overflow: "hidden",
  ".booking": {
    padding: "calc(var(--basic-padding) * 1)",
    border: "1px solid #000000",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",

    "& h1": {
      fontSize: "40px",
      marginBlock: 0,
    }
  },

  "& .details-list": {
    display: "flex",
    gap: "calc(var(--flex-gap) / 2)",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    padding: 0,
    marginBlock: "calc(var(--basic-margin)/2)",
  },

  "& .details-list .list-item": {
    alignItems: "center",
  },

  "& .details-list h3": {
    marginBlock: 0,
    fontSize: "14px",
  },

  "& .details-list p": {
    marginBlock: 0,
  },

  "& .details-list .detail": {
    overflow: "unset",
    fontSize: "unset",
  },

  "& .proceed-button": {
    backgroundColor: "#4B0082",
    color: "#ffffff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: "var(--basic-margin)",
    marginBottom: "var(--basic-margin)",
    padding: "calc(var(--basic-padding) / 2) var(--basic-padding)",
  },

  "@media screen and (max-width: 480px)": {
    "& .details-list": {
      alignItems: "flex-start",
      flexDirection: "column",
    },

    "& .details-list .list-item": {
      alignItems: "flex-start",
    },
  },

  "@media screen and (max-width: 1440px)": {
    "& .details-list div": {
      gap: 0,
      flexDirection: "column",
    },

    "& .facilty-scheduler": {
      overflow: "hidden",
      flexDirection: "column",
    }
  },

  "@media screen and (min-width: 1025px) and (max-width: 1096px)": {
    "& .details-list": {
      alignItems: "flex-start",
      flexDirection: "column",
    },

    "& .details-list .list-item": {
      alignItems: "flex-start",
    },
  },
}));

export const BookingRow = styled(Row)(() => ({
  justifyContent: "space-between",
  marginBlockStart: "calc(var(--basic-margin)/2)",
  marginBlockEnd: "var(--basic-margin)",

  "& fieldset": {
    flex: 1,
    overflow: "hidden",
    display: "flex",
    gap: "calc(var(--flex-gap)/8)",
    flexDirection: "column",
    justifyContent: "space-between",

    "& input": {
      padding: "calc(var(--basic-padding) / 2) var(--basic-padding)",
      border: "1px solid #000000",
    },

    "& label": {
      fontWeight: 500,
      fontSize: "22px",
    }
  },

  "@media screen and (max-width: 1280px)": {
    flexDirection: "column",
  },
}));

export const Sidebar = styled(Row)(() => ({
  backgroundColor: "#2C3E50",
  color: "#F9F9F9",
  display: "flex",
  gap: "var(--flex-gap)",
  overflow: "auto",
  padding: "calc(var(--basic-padding) * 1.5) 0",
  paddingRight: "calc(var(--basic-padding) * 1.5)",

  "& h2": {
    fontSize: "18px",
    marginBlock: 0,
    padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/1.25)",
  },

  "& .day": {
    display: "flex",
    justifyContent: "space-between",
    padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding)/1.25)",
    fontSize: "14px",
    color: "#CCCCCC",
    cursor: "pointer",
  },

  "& .day:hover, & .selected-day": {
    backgroundColor: "#ECF0F1",
    color: "#333333",
  },

  "& .days-container": {
    flexDirection: "row",
  },

  "@media screen and (min-width: 1441px)": {
    minWidth: "200px",
    padding: "calc(var(--basic-padding) * 1.5) 0",
    flexDirection: "column",

    "& .days-container": {
      flexDirection: "column",
    }
  }
}));

export const Schedule = styled("div")(() => ({
  flex: 1,
  padding: "calc(var(--basic-padding) / 2)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  overflow: "hidden",
  backgroundColor: "#F5F5F5",

  "@media screen and (min-width: 425px)": {
    padding: "calc(var(--basic-padding) * 1.25)",
  },

  "@media screen and (max-width: 1296px)": {
    "& .remove-slot-button": {
      overflow: "hidden",
      width: "100%",
    },
  },
}));

export const TimeSlot = styled(Row)(() => ({
  alignItems: "center",
  justifyContent: "space-between",
  padding: "calc(var(--basic-padding)/1.25)",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
  color: "#666666",
  overflow: "hidden",

  "& .time": {
    "& span": {
      fontSize: "14px",
      fontWeight: 700,
      display: "block"
    },
    "@media screen and (max-width: 1296px)": {
      width: "100%",
      overflow: "hidden",
    },
  },

  "& .details": {
    flex: 1,
    color: "#3498DB",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  "& .input-fields": {
    flex: 1,
    overflow: "hidden",
  },

  "@media screen and (max-width: 1296px)": {
    flexDirection: "column",
    alignItems: "flex-start",

    "& .input-fields": {
      width: "100%",
    },
  },
}))
