import { Calendar } from "../../components/calendar";
import { SideNavigation } from "../../components/navigation/sidenavigation";
import { TopNavigation } from "../../components/navigation/topnavigation";
import { LayoutWrapper, MainAreaWrapper } from "./styled";

export const Layout = ({ children, title, subTitle }) => {
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
            <Calendar />
        </LayoutWrapper>
    )
}