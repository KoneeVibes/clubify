import { Calendar } from "../calendar";
import { SideNavigation } from "../../components/navigation/sidenavigation";
import { TopNavigation } from "../../components/navigation/topnavigation";
import { LayoutWrapper, MainAreaWrapper } from "./styled";

export const Layout = ({ children, title, subTitle, fullName, plan, role }) => {
    return (
        <LayoutWrapper>
            <SideNavigation />
            <TopNavigation
                title={title}
                subTitle={subTitle}
            />
            <MainAreaWrapper>
                {children}
            </MainAreaWrapper>
            <Calendar
                plan={plan}
                role={role}
                fullName={fullName}
            />
        </LayoutWrapper>
    )
}