import React, { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

import * as Styled from "./NormalInput.styled";

interface ITextInputProps {
  fieldName: string;
  placeholder: string;
  fieldLabel?: string;
  fieldType?: string;
  fieldValue?: string;
  onChangeHandler?: (event: React.ChangeEvent) => void;
}

interface IRadioProps {
  fieldName: string;
  fieldLabel: string;
  fieldValue: string | number;
  fieldId: string;
  checked?: boolean;
  onChangeHandler: (event: React.ChangeEvent) => void;
}

interface ISelectProps extends ITextInputProps {
  options: { id: string; value: string; label: string; name?: string }[];
  onChangeHandler?: (event: React.ChangeEvent) => void;
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
        name={fieldName}
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
  onChangeHandler,
}) => {
  return (
    <Styled.FormFieldGroup controlId={fieldName}>
      <Styled.FormGroupLabel>{fieldLabel}</Styled.FormGroupLabel>
      <Styled.TextAreaInput
        as="textarea"
        onChange={onChangeHandler}
        rows={3}
        placeholder={placeholder}
        name={fieldName}
      />
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
    <option key={option.id} value={option.id}>
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
        name={fieldName}
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
  checked,
  onChangeHandler,
}) => {
  return (
    <Styled.RadioInputWrapper>
      <Styled.RadioInput
        type="radio"
        name={fieldName}
        value={fieldValue}
        id={fieldId}
        defaultChecked={checked}
        onChange={(event) => onChangeHandler(event)}
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
