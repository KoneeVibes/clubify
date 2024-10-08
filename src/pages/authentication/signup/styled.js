import styled from "styled-components";
import { Row } from "../../../components/flex/styled";

export const SignUpWrapper = styled(Row)(() => {
    return {
        gap: "calc(var(--flex-gap) * 1.5)",
        "& .reg-form": {
            flex: 1,
            overflow: "hidden",
            padding: "calc(var(--basic-padding)) 0 calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2)",
            "& form": {
                display: "flex",
                flexDirection: "column",
                gap: "calc(var(--flex-gap)/2)",
            },
        },
        "& .regform-title": {
            "& svg": {
                position: "absolute",
            },
            "& img":{
                overflow:"hidden",
                paddingLeft:"7rem",
            },
        },
        "& .regform-text": {
            marginLeft: "auto",
            marginRight: "auto"
        },
        "& .regform-text h1": {
            color: "#4B95FF",
            textAlign: "center",
            marginBlock: 0,
        },
        "& .regform-text p": {
            color: "#666666",
            textAlign: "center",
        },
        "& a": {
            color: "#000000",
            textDecoration: "none",
        },
        "& .reg-image": {
            flex: 1,
            overflow: "hidden",
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) 0",
        },
        "& .reg-form input": {
            padding: "calc(var(--basic-padding) / 5) calc(var(--basic-padding)/5)",
            outline: "none",
            border: "1px solid black",
            borderRadius: "8px",
        },
        "&. reg-form label":{
            color:"#000000",
        },
        "& .reg-form fieldset": {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            flex: 1,
        },
        "& .user-roles": {
            // display: "flex",
            justifyContent: "space-around",
            width: "100%",
            "&.fieldSet": {
                display: "flex",
                gap: "0.5rem",
            },
        },
        "& .reg-image>img": {
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
        },
        "& .google-btn": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'calc(var(--flex-gap)/4)',
            overflow: "hidden",
            color: "#000000",
            border: '1px solid #000',
            borderRadius: "1rem",
            padding: "calc(var(--basic-padding)/2) var(--basic-padding)",
        },
        "& .signin-button":{
            overflow: "hidden",
        },
        "& .sign-in-link": {
            textAlign: "center",
            overflow: "hidden",
        },
        "& .userrole-radio":{
            flexDirection: "row !important",
            alignItems: "center"
        },
        "@media screen and (min-width: 1440px)": {
            gap: "calc(var(--flex-gap) * 2)",
        },
        "@media screen and (max-width: 1024px)": {
            "& .reg-image": {
                display: "none",
            },
            "& .reg-form": {
                padding: "var(--basic-padding)",
            }
        },
        "@media screen and (max-width: 425px)": {
            "& .regform-title": {
                flexDirection: "column",
                overflow: "hidden",
                "& svg": {
                    position: "static"
                }
            },
            "& .regform-text": {
                marginLeft: "unset",
                marginRight: "unset"
            },
            "& .user-roles":{
            flexDirection: "column !important",
            alignItems: "flexstart",
        },
        },
    }
});

export const SignUpRow = styled(Row)(() => {
    return {
        gap: "calc(var(--flex-gap)*1)",
        justifyContent: "space-between",
        "@media screen and (max-width: 1280px)": {
            gap: "calc(var(--flex-gap)/1)",
            flexDirection: "column",
        },
    };
});