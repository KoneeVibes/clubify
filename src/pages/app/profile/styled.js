import styled from "styled-components";
import wavy from "../../../assets/twistline3.svg";
import curly from "../../../assets/bluetwistline.svg";

export const ProfileWrapper = styled("div")(() => {
  return {
    "& .background": {
      backgroundColor: "#3C1985",
      width: "100%",
      height: "113px",
      backgroundImage: `url(${wavy})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "absolute",
      left: "0",
      right: "0",
    },
    "& .card": {
      backgroundImage: `url(${curly})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      overflow: "visible",
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
    "& .user-icon": {
      borderRadius: "30px",
      justifyContent: "flex-start",
      display: "flex",
      position: "absolute",
      left: "-25px",
      top: "-55px"
    },
    "& .badge": {
      justifyContent: "center",
      gap: "calc(var(--flex-gap)/10)",
    }
  }
})