import React from "react";
import { Image } from "react-bootstrap";

import { TextInput, FileWithPreview } from "./../../../../../libs";

import * as Styled from "./CastUploadForm.styled";

export const CastUploadForm: React.FC<{
  onSave: (
    castName: string,
    roleName: string,
    castImage?: FileWithPreview
  ) => void;
  onDiscard: () => void;
}> = ({ onSave, onDiscard }) => {
  const [castName, setCastName] = React.useState("");
  const [roleName, setRoleName] = React.useState("");
  const [castImage, setCastImage] = React.useState<FileWithPreview>();

  const castNameChangeHandler = React.useCallback((event) => {
    setCastName(event?.target.value);
  }, []);

  const roleNameChangeHandler = React.useCallback((event) => {
    setRoleName(event?.target.value);
  }, []);

  const resetForm = React.useCallback(() => {
    setCastName("");
    setRoleName("");
    setCastImage(undefined);
  }, []);

  const onSaveHandler = React.useCallback(() => {
    onSave(castName, roleName, castImage);
    resetForm();
  }, [castName, roleName, onSave, resetForm, castImage]);

  const onDiscardHandler = React.useCallback(() => {
    resetForm();
    onDiscard();
  }, [onDiscard, resetForm]);

  const handleCastImageUpload = React.useCallback((event) => {
    const file = event.target.files[0];
    const castImageFile: FileWithPreview = {
      file,
      previewUrl: URL.createObjectURL(file),
    };
    setCastImage(castImageFile);
  }, []);

  return (
    <>
      <Styled.Stack direction="horizontal" gap={2} className="space-between">
        {castImage ? (
          <Image
            src={castImage.previewUrl}
            roundedCircle={true}
            width={60}
            height={60}
          />
        ) : (
          <Styled.CastUploadBtn
            type="file"
            className="custom-file-input"
            onChange={handleCastImageUpload}
          />
        )}
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
