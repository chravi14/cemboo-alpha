import React from "react";

import * as Styled from "./Button.styled";

interface IButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <Styled.Button variant={variant} size="md" disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export const BaseButton: React.FC<IButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <Styled.DefaultButton type="button" variant={variant} disabled={disabled}>
      {children}
    </Styled.DefaultButton>
  );
};
