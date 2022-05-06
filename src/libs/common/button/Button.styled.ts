import styled, { css } from "styled-components";
import { Button as BaseButton, Dropdown } from "react-bootstrap";
import { colors } from "../../themes";

export const Button = styled(BaseButton)`
  width: 100%;
  color: ${colors.text.disabled};

  &:focus,
  .btn-secondary:active:focus,
  .btn-secondary:focus {
    box-shadow: none;
    color: ${colors.text.disabled};
  }
`;

export const DefaultButton = styled.button<any>`
  background-color:transparent;
  border:1px solid transparent;
  text-align:${({ textAlign }) => (textAlign ? textAlign : "center")};
  text-decoration:none;
  vertical-align:middle;
  width: 100%;
  padding:0.375rem 0.75rem;
  line-height 1.5:
  color: ${colors.background.black};
  font-size:1rem;
  display:inline-block;
  border-radius:0.25rem;
  cursor:pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  &:disabled {
    pointer-events:none;
  }

  ${({ size }) =>
    size === "lg" &&
    css`
      padding: 0.475rem 0.75rem;
    `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${colors.background.linearGradient};
      border-color: ${colors.background.linearGradient};
      color: ${colors.text.green};

      &:hover {
        background: ${colors.background.darkGradient};
      }
    `}

    ${({ variant }) =>
      variant === "secondary" &&
      css`
        background: ${colors.background.lightWhite};
        color: ${colors.text.disabled};
      `}
`;

export const DropdownWrapper = styled(Dropdown)`
  width: 100%;
  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    border: 1px solid transparent;
  }
`;

export const DropdownToggle = styled(Dropdown.Toggle)<any>`
  width: 100%;
  text-align: left;
  border: 1px solid transparent;
  padding: 10px 20px;

  &::after {
    float: right;
    margin-top: 12px;
  }

  &:hover,
  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
    border: 1px solid transparent;
    color: ${colors.text.green};
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: ${colors.background.linearGradient};
      border-color: ${colors.background.linearGradient};
      color: ${colors.text.green};

      &:hover {
        background: ${colors.background.darkGradient};

      }

      &:focus, &:active, &:focus-visible {
        background: ${colors.background.linearGradient};
        border-color: ${colors.background.linearGradient};
        color: ${colors.text.green};
        

        &:hover {
          background: ${colors.background.darkGradient};
        }
    `}
`;

export const DropdownMenu = styled(Dropdown.Menu)``;
