import React from "react";

import { TextInput } from "./../../../../../libs";
import CastUploadIcon from "./../../../../../assets/images/image_upload_icon.svg";

import * as Styled from "./CastUploadForm.styled";

export const CastUploadForm: React.FC<{
  onSave: (castName: string, roleName: string) => void;
  onDiscard: () => void;
}> = ({ onSave, onDiscard }) => {
  const [castName, setCastName] = React.useState("");
  const [roleName, setRoleName] = React.useState("");

  const castNameChangeHandler = React.useCallback((event) => {
    setCastName(event?.target.value);
  }, []);

  const roleNameChangeHandler = React.useCallback((event) => {
    setRoleName(event?.target.value);
  }, []);

  const resetForm = React.useCallback(() => {
    setCastName("");
    setRoleName("");
  }, []);

  const onSaveHandler = React.useCallback(() => {
    onSave(castName, roleName);
    resetForm();
  }, [castName, roleName, onSave, resetForm]);

  const onDiscardHandler = React.useCallback(() => {
    resetForm();
    onDiscard();
  }, [onDiscard, resetForm]);

  return (
    <>
      <Styled.Stack direction="horizontal" gap={2} className="space-between">
        <Styled.CastImageUploadIcon src={CastUploadIcon} width={60} />
        <TextInput
          fieldName="name"
          fieldLabel="Name"
          placeholder="Add cast name"
          fieldValue={castName}
          onChangeHandler={castNameChangeHandler}
        />
        <TextInput
          fieldName="roleName"
          fieldLabel="Role"
          fieldValue={roleName}
          placeholder="Add role name"
          onChangeHandler={roleNameChangeHandler}
        />
      </Styled.Stack>
      <Styled.Stack direction="horizontal" gap={2} className="flex-end">
        <Styled.CastUploadDiscardText onClick={onDiscardHandler}>
          Discard
        </Styled.CastUploadDiscardText>
        <Styled.CastUploadSaveText onClick={onSaveHandler}>
          Save
        </Styled.CastUploadSaveText>
      </Styled.Stack>
    </>
  );
};
