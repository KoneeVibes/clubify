import styled from "styled-components";
import wavy from "../../../assets/twistline3.svg";
import curly from "../../../assets/bluetwistline.svg";

export const ProfileWrapper = styled("div")(() => {
    return {
        "& .background": {
          backgroundColor: "#3C1985",
          width: "100%",
          height: "70px",
          backgroundImage:`url(${wavy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          marginBottom: "40px",
        },
        "& .card": {
          backgroundImage:`url(${curly})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxShadow:  "10px 10px 20px rgba(0, 0, 0, 0.5)",
          height: "400px",
          marginLeft: "auto",
          marginRight: "auto"
        },
        "& p": {
          fontSize: "18px",
          fontWeight: "600",
          textAlign: "center",
        },
        "& h2": {
          fontSize: "36px",
          fontWeight: "400",
          lineHeight: "100%",
          textAlign: "center",
        },
        "& .change-button": {
          borderRadius: "10px",
          overflow: "hidden",
          height: "14px",
          width: "150px",
          backgroundColor: "#3C1985",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& p": {
          fontSize: "16px",
          fontWeight: 600,
          color: "#EFEFEF",
          marginBlock: 0,
        },
        },
        "& img": {
          borderRadius: "30px",
          justifyContent: "flex-start",
          display: "flex",
        },
        "& .badge": {
          justifyContent: "center",
          gap: "calc(var(--flex-gap)/10)",
        }
      }
})