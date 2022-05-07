import styled from "styled-components";

import { Form } from "react-bootstrap";
import { colors, types } from "./../../../themes";

export const FormFieldGroup = styled(Form.Group)`
  background: #1e2025;
  border-radius: 1px;
  padding: 5px 15px;
  width: 100%;
`;

export const FormGroupLabel = styled(Form.Label)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
`;

export const FormGroupInput = styled(Form.Control)<any>`
  background: #1e2025;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  border: none;
  padding: 0.375rem 0;

  &:focus {
    border: none;
    outline: none;
    background: #1e2025;
    border: none;
    box-shadow: none;
    color: rgba(255, 255, 255, 1);
  }
`;

export const TextAreaInput = styled(FormGroupInput)<any>`
  display: block;
  width: 100%;
`;

export const SelectInput = styled(Form.Select)`
  background-color: #1e2025;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  border: none;
  padding: 0.375rem 0;

  &:focus {
    border: none;
    outline: none;
    background-color: #1e2025;
    border: none;
    box-shadow: none;
    color: rgba(255, 255, 255, 1);
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  padding: 20px;
  width: 100%;

  &.selected {
    border: 1px solid rgba(183, 248, 77, 0.5);
  }
`;

export const RadioInputLabel = styled.label`
  margin-left: 12px;
  ${types.body.normal};
  ${colors.text.white};
`;

export const RadioInput = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 48px;
    cursor: pointer;
    display: inline-block;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 100%;
    ${colors.background.black};
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: "";
    width: 14px;
    height: 14px;
    background: #b7f84d;
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
