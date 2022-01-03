import React from "react";
import * as Styled from "./input.styled";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  onDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IProps> = ({
  placeholder,
  onDataChange,
  name,
  className,
  type,
}) => {
  return (
    <Styled.TextInputWrapper
      placeholder={placeholder}
      onChange={onDataChange}
      name={name}
      type={type}
      className={className}
    />
  );
};
