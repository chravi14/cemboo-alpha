import React from "react";
import { Form } from "react-bootstrap";

import * as Styled from "./NormalInput.styled";

interface ITextInputProps {
  fieldName: string;
  placeholder: string;
  fieldLabel?: string;
  fieldType?: string;
  fieldValue?: string;
  onChangeHandler?: (value: string) => void;
}

interface IRadioProps {
  fieldName: string;
  fieldLabel: string;
  fieldValue: string | number;
  fieldId: string;
}

interface ISelectProps extends ITextInputProps {
  options: { id: number; value: string; label: string }[];
  onChangeHandler?: (value: string) => void;
}

export const TextInput: React.FC<ITextInputProps> = ({
  fieldName,
  placeholder,
  fieldLabel,
  fieldType = "text",
  fieldValue,
  onChangeHandler,
}) => {
  return (
    <Styled.FormFieldGroup controlId={fieldName}>
      <Styled.FormGroupLabel>{fieldLabel}</Styled.FormGroupLabel>
      <Styled.FormGroupInput
        value={fieldValue}
        type={fieldType}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </Styled.FormFieldGroup>
  );
};

export const TextAreaInput: React.FC<ITextInputProps> = ({
  fieldName,
  placeholder,
  fieldLabel,
}) => {
  return (
    <Styled.FormFieldGroup controlId={fieldName}>
      <Styled.FormGroupLabel>{fieldLabel}</Styled.FormGroupLabel>
      <Styled.TextAreaInput as="textarea" rows={3} placeholder={placeholder} />
    </Styled.FormFieldGroup>
  );
};

export const SelectInput: React.FC<ISelectProps> = ({
  fieldName,
  placeholder,
  options,
  fieldValue,
  fieldLabel = "",
  onChangeHandler,
}) => {
  const optionValues = options.map((option) => (
    <option key={option.id} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <Styled.FormFieldGroup controlId={fieldName}>
      {fieldLabel && (
        <Styled.FormGroupLabel>{fieldLabel}</Styled.FormGroupLabel>
      )}
      <Styled.SelectInput
        aria-label="Default select example"
        onChange={onChangeHandler}
        value={fieldValue}
      >
        <option>{placeholder}</option>
        {optionValues}
      </Styled.SelectInput>
    </Styled.FormFieldGroup>
  );
};

export const RadioInput: React.FC<IRadioProps> = ({
  fieldLabel,
  fieldName,
  fieldValue,
  fieldId,
}) => {
  return (
    <Styled.RadioInputWrapper>
      <Styled.RadioInput
        type="radio"
        name={fieldName}
        value={fieldValue}
        id={fieldId}
      />
      <Styled.RadioInputLabel htmlFor={fieldId}>
        {fieldLabel}
      </Styled.RadioInputLabel>
    </Styled.RadioInputWrapper>
  );
};

export const InputSwtich = () => {
  return <Form.Check type="switch" id="custom-switch" />;
};
