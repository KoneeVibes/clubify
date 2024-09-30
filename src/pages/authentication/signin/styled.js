import styled from 'styled-components';
import { Row } from '../../../components/flex/styled';

export const SignInWrapper = styled(Row)(() => {
    return {
        margin: 'var(--basic-margin)',
        padding: 'var(--basic-padding)',
        gap: 'var(--flex-gap)',
        ".signin-form, .signin-image": {
            flex: 1,
        },
       
        "form": {
            display: "flex",
            flexDirection: "column",
            padding: "0 calc(var(--basic-padding)*3)",
                    // alignItems: "center",
                    // justifyContent: "center",
            gap: "calc(var(--flex-gap)/2)",

        },
        "& .signin-form input": {
            padding: "calc(var(--basic-padding) / 5) calc(var(--basic-padding)/5)",
            outline: "none",
            border: "1px solid black",
            borderRadius: "8px",
        },
        
        // ".signin-form": {
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     gap: 'var(--flex-gap)',
        //     padding: 'var(--flex-gap)',
        // },
        ".signin-options": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom:'var(--flex-gap)',
        },
        ".signin-header": {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--flex-gap)',
        },
        ".google-signup": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--flex-gap)',
            color: "#000000",
            border: '1px solid #000',
            borderRadius: '20px',
            
        },
        ".signin-image": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        ".sign-in-link": {
            textAlign: "center",
        },
        "A":{
            color: "#000000",  
            textDecoration: "none",
            gap: 'var(--flex-gap)',
        },
        "H1":{
            color:"#4B95FF",
        },
        "@media screen and (max-width: 1024px)": {
            ".signin-image":{
                display: "none",
            }
        }
    };
});
