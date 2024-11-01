import styled from "styled-components";
import { Row } from "../../../components/flex/styled";

export const FacilitiesWrapper = styled("div")(() => ({
  ".facility-booking": {
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
    backgroundColor: "#4b0082",
    color: "#ffffff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    overflow: "hidden",
    margin: "0 auto",
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

export const FacilitiesRow = styled(Row)(() => ({
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

// Wrapper for the Interview Scheduler component
export const InterviewSchedulerWrapper = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Sidebar = styled.div`
  background-color: #2c3e50;
  color: #f9f9f9;
  padding: 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .day {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 14px;
    color: #ccc;
    cursor: pointer;
  }

  .selected-day {
    background-color: #ecf0f1;
    color: #333;
    padding: 8px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
`;

export const Schedule = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f5f5f5;
`;

export const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  color: #666;

  .time {
    font-size: 14px;
    font-weight: bold;
  }

  .details {
    flex: 1;
    padding-left: 20px;
    color: #3498db;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .add-button,
  .remove-button {
    width: 32px;
    height: 32px;
    font-size: 24px;
    color: #7f8c8d;
    background-color: #ecf0f1;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-button:hover,
  .remove-button:hover {
    background-color: #bdc3c7;
  }
`;
