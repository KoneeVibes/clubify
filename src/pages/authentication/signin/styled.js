import styled from 'styled-components';
import { Row } from '../../../components/flex/styled';

export const SignInWrapper = styled(Row)(() => {
    return {
        gap: "calc(var(--flex-gap) * 1.5)",
        "& .signin-form": {
            flex: 1,
            overflow: "hidden",
            padding: "calc(var(--basic-padding)) 0 calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2)",
            "& form": {
                display: "flex",
                flexDirection: "column",
                gap: "calc(var(--flex-gap)/2)",
            },
        },
        "& .signin-header": {
            "& svg": {
                position: "absolute",
            }
        },
        "& .signin-text": {
            marginLeft: "auto",
            marginRight: "auto"
        },
        "& .signin-text h1": {
            color: "#4B95FF",
            textAlign: "center",
            marginBlock: 0,
        },
        "& .signin-text p": {
            color: "#666666",
            textAlign: "center",
        },
        "& a": {
            color: "#000000",
            textDecoration: "none",
        },
        "& .remember-label": {
            fontSize: "18px",
        },
        "& .signin-image": {
            flex: 1,
            overflow: "hidden",
            padding: "calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2) 0",
        },
        "& .signin-form input": {
            padding: "calc(var(--basic-padding) / 5) calc(var(--basic-padding)/5)",
            outline: "none",
            border: "1px solid black",
            borderRadius: "8px",
        },
        "& .signin-form fieldset": {
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            flex: 1,
        },
        "& .signin-image>img": {
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
        },
        "& .signin-options": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 'var(--flex-gap)',
            overflow: 'hidden',
        },
        "&. signin-button": {
            overflow: "hidden",
        },
        "& .google-signup": {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'calc(var(--flex-gap)/4)',
            color: "#000000",
            border: '1px solid #000',
            borderRadius: '20px',
            overflow: "hidden",
        },
        "& .button-column": {
            gap: "calc(var(--flex-gap)/2)",
            overflow: "hidden",
        },
        "& .sign-in-link": {
            textAlign: "center",
            overflow: "hidden",
        },
        "@media screen and (min-width: 1440px)": {
            gap: "calc(var(--flex-gap) * 2)",
        },
        "@media screen and (max-width: 1024px)": {
            "& .signin-image": {
                display: "none",
            },
            "& .signin-form": {
                padding: "var(--basic-padding)",
            },
        },
        "@media screen and (max-width: 425px)": {
            "& .signin-header": {
                flexDirection: "column",
                overflow: "hidden",
                "& svg": {
                    position: "static"
                }
            },
            "& .signin-text": {
                marginLeft: "unset",
                marginRight: "unset"
            },
        },

    };
});
