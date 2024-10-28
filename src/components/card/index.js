import { CardWrapper } from "./styled";

export const Card = ({ children, bgcolor, radius, padding }) => {
    return (
        <CardWrapper
            bgcolor={bgcolor}
            radius={radius}
            padding={padding}
            className="card"
        >
            {children}
        </CardWrapper>
    )
}