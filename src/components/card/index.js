import { CardWrapper } from "./styled";

export const Card = ({ children, bgcolor, radius }) => {
    return (
        <CardWrapper
            bgcolor={bgcolor}
            radius={radius}
            className="card"
        >
            {children}
        </CardWrapper>
    )
}