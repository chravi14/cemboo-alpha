import React from "react";
import { Dropdown } from "react-bootstrap";

import * as Styled from "./Button.styled";

interface IButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-secondary";
  disabled?: boolean;
  size?: "md" | "lg" | "sm";
  textAlign?: "left" | "right" | "center";
  type?: "button" | "submit";
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
  size = "md",
  textAlign = "center",
  type = "button",
  ...opts
}) => {
  return (
    <Styled.DefaultButton
      variant={variant}
      disabled={disabled}
      size={size}
      textAlign={textAlign}
      type={type}
      {...opts}
    >
      {children}
    </Styled.DefaultButton>
  );
};

export const DropdownButton: React.FC = ({ children }) => {
  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownToggle variant="primary" id="dropdown-basic" size="md">
        New Video
      </Styled.DropdownToggle>

      <Dropdown.Menu variant="dark" align="end">
        {children}
      </Dropdown.Menu>
    </Styled.DropdownWrapper>
  );
};
