import Cookies from "universal-cookie";
import { Layout } from "../../../../containers/layout";
import { H1, H3, P, Span, Li } from "../../../../components/typography/styled";
import { UploadPlanWrapper } from "./styled";
import { Card } from "../../../../components/card";
import { Column } from "../../../../components/flex/styled";
import uploadImage from "../../../../assets/images/uploadImage.svg";
import { BaseButton } from "../../../../components/button/styled";
import { uploadFile } from "../../../../utils/apis/uploadFile";
import { useEffect, useState } from "react";


export const Upload = () => {
    const cookies = new Cookies();
    const { profile, data } = cookies.getAll();

    const [file, setFile] = useState({});
    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await uploadFile(data.token);
                return setFile(response);
            } catch (error) {
                console.error(error)
            }
        }
        fetchFile();
    }, [data.token]);

    return (
        <Layout
            role={profile?.role}
            title={`Hello ${profile?.role === "administrator" ? profile?.firstname || "" : profile?.member?.firstname || ""}`}
            subTitle={new Date().toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                weekday: 'long'
            })}
            plan={profile?.plan?.planName || ""}
            fullName={profile?.role === "administrator" ? `${profile?.firstname || ""} ${profile?.lastname || ""}` : `${profile?.member?.firstname || ""} ${profile?.member?.lastname || ""}`}
        >
            <UploadPlanWrapper>
                <div className="title">
                    <H1>UPLOAD FILE</H1>
                </div>
                <Card
                    bgcolor={"#D9D9D9"}
                >
                    <form
                        style={{ overflow: "hidden" }}
                    >
                        <div className="upload-icon">
                            <img src={uploadImage} alt="Upload Icon" />
                        </div>
                        <Column className="card-info">
                            <H3>Drag & Drop files or Browse</H3>
                            <P>Supported formats:PNG,PDF,PPT</P>
                        </Column>
                    </form>
                </Card>
                <div className="card-body">
                    <div
                        className="card-body-text"
                    >
                        <Span>PLEASE UPLOAD THE FOLLOWING DOCUMENTS IN ORDER:</Span>
                    </div>
                    <ol>
                        <Li>RECEIPT</Li>
                        <Li>ACCEPTANCE LETTER</Li>
                        <Li>PASSPORT</Li>
                    </ol>
                </div>
                <div className="upload-button">
                    <BaseButton
                        backgroundcolor={"#4B0082"}
                    >
                        <Span>UPLOAD FILES</Span>
                    </BaseButton>
                </div>
            </UploadPlanWrapper>
        </Layout>
    );
};