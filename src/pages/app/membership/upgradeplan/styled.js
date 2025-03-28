import styled from "styled-components";
import { Column } from "../../../../components/flex/styled";

export const UpgradePlanWrapper = styled(Column)(() => {
    return {
        overflow: "hidden",
        "& .title": {
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            "& h1": {
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "center",
                margin: "0 auto",
                marginBlock: 0,
                float: "left",
            }
        },
        "& .highlight-purple": {
            color: "#3C1985",
            display: "inline",
        },
        "& .cards": {
            flex: "1",
        },
        "& .card-header": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        "& P": {
            fontSize: "12px",
        },
        "& li": {
            fontSize: "12px",
            textAlign: "left",
            overflow: "unset",

        },
        "& .upload-button": {
            overflow: "hidden",
            marginBlockEnd: "calc(var(--basic-margin))",
            display: "flex",
            justifyContent: "center",
            "& button": {
                width: "auto",
                "& span": {
                    fontSize: "15px",
                    fontWeight: 500,
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                },
            }
        },

        "& .amount": {
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textShadow: "0 4px 4px rgba(0, 0, 0, 0.5) ",
        }



    };
});