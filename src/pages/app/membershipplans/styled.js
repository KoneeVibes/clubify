import styled from "styled-components";
import { Column } from "../../../components/flex/styled";
import wavy from "../../../assets/group17.svg";

export const MembershipPlansWrapper = styled(Column)(() => {
    return {
        gap: "calc(var(--flex-gap) * 1.5)",
        "& .title": {
            display: "flex",
            "& h1": {
                fontWeight: "bold",
                textAlign: "center",
                marginBlock: 0,
            },
            "@media screen and (min-width: 768px)": {
                justifyContent: "center",
                "& h1": {
                    width: "70%"
                },
            },
        },
        "& .background": {
            borderRadius: "15px",
            fontWeight: "bold",
            color: "white",
            display: "flex",
            justifyContent: "center",
            padding: "calc(var(--basic-padding))",
            backgroundImage: `url(${wavy})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            overflow: "hidden"
        },
        "& form": {
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--flex-gap)/2)",
            width: "100%",
            "& fieldset": {
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                gap: "var(--flex-gap)"
            },
            "& label": {
                fontSize: "16px",
                flex: 0.2,
                overflow: "hidden",
            },
            "& input": {
                flex: 0.8,
                outline: "none",
                border: "1px solid black",
                borderRadius: "8px",
                padding: "calc(var(--basic-padding) / 5) calc(var(--basic-padding)/5)",
                overflow: "hidden !important",
                width: "100%"
            },
            "@media screen and (min-width: 425px) and (max-width: 1280px)": {
                "& label": {
                    flex: 0.4
                },
                "& input": {
                    flex: 0.6
                }
            },
            "@media screen and (max-width: 425px)": {
                "& fieldset": {
                    flexDirection: "column",
                    gap: "var(--flex-gap)"
                },
            },
        },
        "& .button-row": {
            justifyContent: "flex-end",
            "@media screen and (max-width: 425px)": {
                flexDirection: "column",
                gap: "calc(var(--flex-gap)/2)"
            },
            "@media screen and (min-width: 1024px)": {
                "& button": {
                    width: "auto",
                },
            },
        },
    }
})