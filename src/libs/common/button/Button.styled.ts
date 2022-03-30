import styled, { css } from "styled-components";
import { Button as BaseButton } from "react-bootstrap";
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
  text-align:center;
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
