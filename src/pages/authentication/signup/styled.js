import styled from "styled-components";
import { Row } from "../../../components/flex/styled";

export const SignUpWrapper = styled(Row)(() => {
    return {
        margin: "calc(var(--basic-margin) * 2) 0",
        padding: "0 var(--basic-padding)",
        ".reg-form": {
            flex: 1,

            "form": {
                display: "flex",
                flexDirection: "column",
                padding: "0 calc(var(--basic-padding)*3)",
                // alignItems: "center",
                // justifyContent: "center",
                gap: "calc(var(--flex-gap)/2)",

            },
        },
        ".regform-img": {
            display: "flex",
        },
        ".regform-text": {
            textAlign: "center",
            padding: "0 calc(var(--basic-padding)*3)",
        },
        ".regform-text H1": {
            color:"#4B95FF",
        },
        "A":{
            color: "#000000",  
            textDecoration: "none",
        },
        
        ".reg-image": {
            flex: 1,
        },
        "& .reg-form input": {
            padding: "calc(var(--basic-padding) / 5) calc(var(--basic-padding)/5)",
            outline: "none",
            border: "1px solid black",
            borderRadius: "8px",
        },
        "& .reg-form fieldset": {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",

        },
        "& .reg-form lable":{
            color: "#000000",
        },
        ".user-roles": {
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            "BaseFieldSet": {
                display: "flex", 
                gap: "0.5rem",
            },
          },

        ".reg-image>svg": {
           width: "100%",
        },
        ".regform-img>svg": {
            paddingLeft: " calc(var(--basic-padding)*3)",
        },
        ".google-btn": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--flex-gap)',
            color: "#000000",
            border: '1px solid #000',
            borderRadius: "1rem",
            padding: "calc(var(--basic-padding)/2) var(--basic-padding)",
        },
        ".sign-in-link": {
            textAlign: "center",
        },
        "@media screen and (max-width: 1280px)": {
            ".reg-form, .reg-image": {
                padding: "calc(var(--basic-padding) * 2)",
            },
        },

        // "@media screen and (max-width: 768px)": {
        //     ".reg-form,": {
        //         padding: "calc(var(--basic-padding) * 1.5)",
        //     },
        //     ".reg-image":{
        //         display: "none",
        //     },
        // },

        "@media screen and (max-width: 425px)": {
            ".reg-image":{
                display: "none",
            },
            ".regform-img":{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 'var(--flex-gap)',
            },
        },
    }
});

export const SignUpRow = styled(Row)(() => {
    return {
        gap: "calc(var(--flex-gap)*1)",
        "@media screen and (max-width: 1280px)": {
            gap: "calc(var(--flex-gap)/1)",
            flexDirection: "column",
        },
    };
});