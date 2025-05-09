import styled from "styled-components";
import { Column } from "../../../../components/flex/styled";

export const UploadPlanWrapper = styled(Column)(() => {
    return {
        overflow: "hidden",
        "& .title": {
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            "& h1": {
                fontWeight: "bold",
                fontSize: "25px",
                textAlign: "center",
                margin: "0 auto",
                marginBlock: 0,
            }
        },
        "& .upload-icon": {
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        "& .card-info": {
            gap: "calc(var(--flex-gap)/2)",
            "& h3": {
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "0",
            },
            "& p": {
                fontSize: "15px",
                textAlign: "center",
                margin: "0",
            }
        },
        "& span": {
            fontSize: "15px",
            fontWeight: "bold",
        },
        "& .card-body-text": {
            overflow: "hidden"
        },
        "& ol": {
            marginBlockEnd: 0,
            overflow: "hidden",
            "& li": {
                fontSize: "15px",
                textAlign: "left",
                overflow: "unset"
            },
        },
        "& .upload-button": {
            overflow: "hidden",
            marginBlockEnd: "calc(var(--basic-margin))",
            display: "flex",
            justifyContent: "center",
            "& button": {
                width: "auto",
                "& span": {
                    fontSize: "18px",
                    fontWeight: 500,
                    transition: "background-color 0.3s ease, transform 0.2s ease",
                },
            }
        }
    };
});