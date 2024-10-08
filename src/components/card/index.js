import { CardWrapper } from "./styled";

export const Card = ({ children, bgColor, radius }) => {
    return (
        <CardWrapper
            bgColor={bgColor}
            radius={radius}
            className="card"
        >
            {children}
        </CardWrapper>
    )
}