import React from "react";

import * as Styled from "./Input.styled";

interface ITextInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  controlId?: string;
  value?: string | number;
  onChangeHandler?: (value: string) => void;
}

export const FloatingTextInput: React.FC<ITextInputProps> = ({
  label,
  type = "text",
  placeholder,
  controlId,
  onChangeHandler,
  value,
}) => {
  return (
    <Styled.FormGroupFloatingLabel controlId={controlId} label={label}>
      <Styled.FormGroupInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        name={controlId}
        autoComplete="off"
      />
    </Styled.FormGroupFloatingLabel>
  );
};
