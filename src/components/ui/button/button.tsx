import React from "react";
import * as Styled from "./button.styled";

interface IButtonProps extends React.ButtonHTMLAttributes<any> {
  buttonText: string;
}

export const Button: React.FC<IButtonProps> = ({ buttonText }) => {
  return <Styled.StyledButton>{buttonText}</Styled.StyledButton>;
};
