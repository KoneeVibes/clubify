// style.js
import styled from "styled-components";
import { Row } from "../../components/flex/styled";

// Wrapper for the Facilities component
export const FacilitiesWrapper = styled("div")(() => ({
  ".facility-booking": {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "calc(var(--basic-padding)* 1.7)",
    border: "3px solid #000000",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "1rem",
    gap: "calc(var(--flex-gap)*1.5)",
  },

  "& .details-list": {
    display: "flex",
    gap: "calc(var(--flex-gap)*1.5)",
    padding: "0",
  },

  "& .details-list li": {
    overflow: "unset",
    display: "flex",
  },

  "& .details-list details": {
    listStyle: "none",
  },

  "& .facility-booking input": {
    padding: "calc(var(--basic-padding) / 2) var(--basic-padding)",
    border: "3px solid #000000",
    backgroundColor: "#FFFFFF",
  },

  "& .facility-booking fieldset": {
    flex: 1,
    overflow: "hidden",
    display: "flex",
    gap: "calc(var(--flex-gap)/8)",
    flexDirection: "column",
    justifyContent: "space-between",
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

  "& . scheduler-image-container":{
    display:"flex",
  }
}));

export const FacilitiesRow = styled(Row)(() => ({
  justifyContent: "space-between",
  "@media screen and (max-width: 1280px)": {
    gap: "calc(var(--flex-gap)*1.5)",
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
