import { SideNavigation } from "../../components/navigation/sidenavigation";
import { TopNavigation } from "../../components/navigation/topnavigation";
import { H2 } from "../../components/typography/styled";
import { CalendarWrapper, LayoutWrapper, MainAreaWrapper } from "./styled";

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
            <CalendarWrapper>
                {/* calendar component goes in here */}
                <H2 style={{ marginBlock: 0 }}>Calendar Component</H2>
            </CalendarWrapper>
        </LayoutWrapper>
    )
}