import React from "react";
import * as Styled from "./button.styled";

interface IButtonProps extends React.ButtonHTMLAttributes<any> {
  buttonText: string;
  clickHandler: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  buttonText,
  clickHandler,
}) => {
  return (
    <Styled.StyledButton onClick={clickHandler}>
      {buttonText}
    </Styled.StyledButton>
  );
};
