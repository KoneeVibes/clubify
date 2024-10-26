import styled from "styled-components";
import { Row } from "../../components/flex/styled";

export const MembershipWrapper = styled("div")(() => {
  return {
    backgroundColor: "#FFFFFF",
    gap: "0",
    "& H2": {
      marginBlock: 0,
      fontSize: "24px",
    },
    "& H3": {
      fontSize: "20px",
      fontWeight: "700",
    },
    "& .fieldRow": {
      backgroundColor: "#D9D9D9",
      padding: "calc(var(--basic-padding)/3) ",
    },
    "& .hr": {
      border: "1px solid #3C1985",
    },
    "& .color": {
      backgroundColor: "#EFEFEF",
    },
    "& .membershipOptions": {
      backgroundColor: "#EFEFEF",
    },
    "& .option": {
      gap: "calc(var(--flex-gap)/2)",
    },
    "& .rowDirection": {
      justifyContent: "space-between",
    },
    "& .highlight": {
      color: "#FFC00E",
    },
  };
});
