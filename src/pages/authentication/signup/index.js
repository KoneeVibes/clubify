import { SignUpWrapper } from "./styled";
import { BaseButton } from "../../../components/button/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <BaseButton
        width={"fit-content"}
      >
        Get Started
      </BaseButton>
      <FontAwesomeIcon icon={faHouse} />
    </SignUpWrapper>
  )
};
