import styled from "styled-components";
import wavy from "../../../assets/twistline3.svg";
import lines from "../../../assets/vastlines2.svg";

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
      backgroundImage: `url(${lines})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      overflow: "visible",
      height: "100%",
      
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      color: "#FDFAF6",
    
    },
    "& h2": {
      fontSize: "36px",
      fontWeight: "400",
      lineHeight: "100%",
      textAlign: "center",
      color: "#FDFAF6",
      
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
      margin: "auto",

      "& p": {
        fontSize: "16px",
        fontWeight: 400,
        marginBlock: 0,
      },
  },
    "& .user-icon": {
      borderRadius: "30px",
      justifyContent: "flex-start",
      display: "flex",
      position: "absolute",
      left: "-25px",
      top: "-95px",
    },
    "& .badge": {
      justifyContent: "center",
      gap: "calc(var(--flex-gap)/10)",
      marginBottom: "-10px",
      marginTop: "-20px",
    },
    "& .gold": {
      color: "#FEBA17",
      display: "inline-block",
      paddingRight: "3px",
    },
    "& .black": {
      color: "#2C3930",
      display: "inline-block",
      paddingLeft: "3px",
    },
    "& .planText": {
      display: "inline-block",
    },
     "& H4": {
      display: "inline-block",
      color: "#2C3930",
    },
     "& head": {
      margin: "0",
     }
  }
})