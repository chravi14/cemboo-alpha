import React from "react";
import { Form, Col, Stack } from "react-bootstrap";

import { BaseButton, ICast } from "./../../../../libs";

import PlusIcon from "./../../../../assets/images/plus.svg";

import { CastItem } from "./cast-item";
import { CastUploadForm } from "./cast-upload-form";

import * as Styled from "./CastDetails.styled";
import { FileWithPreview } from "../../../../libs/models/uploads";

export const CastDetails: React.FC<{
  onCastDetailsSubmit: (castDetails: ICast[]) => void;
}> = ({ onCastDetailsSubmit }) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [castList, setCastList] = React.useState<ICast[]>([]);

  const [showAddIcon, setShowAddIcon] = React.useState(true);
  const [showCastUploadForm, setShowCastUploadForm] = React.useState(false);
  const [isImportedFromIMDB, setIsImportedFromIMDB] = React.useState(false);

  const handleUseImdbLinkToggle = React.useCallback((event) => {
    setShowAddIcon(!event.target.checked);
    if (event.target.checked) {
      const CAST_INFO = [
        {
          name: "Ryan Gosling",
          roleName: "Officer KD6-3.7",
          imageUrl: "",
        },
        {
          name: "Ana de Armas",
          roleName: "Joi",
          imageUrl: "",
        },
      ];
      setCastList(CAST_INFO);
      setIsImportedFromIMDB(true);
      setShowCastUploadForm(false);
    } else {
      setCastList([]);
      setIsImportedFromIMDB(false);
    }
  }, []);

  const handleAddManualIconClick = React.useCallback(() => {
    setShowCastUploadForm(true);
  }, []);

  const handleCastEdit = React.useCallback(() => {}, []);

  const handleCastDelete = React.useCallback(
    (castId) => {
      const updatedCastList = [...castList];
      const index = updatedCastList.findIndex((cast) => cast.id === castId);
      if (index >= 0) {
        updatedCastList.splice(index, 1);
        setCastList([...updatedCastList]);
      }
    },
    [castList]
  );

  const castListDetail = castList.map((cast, index) => (
    <CastItem
      roleName={cast?.roleName}
      castName={cast?.name}
      castImageSrc={cast.castImageFile ? cast.castImageFile.previewUrl : ""}
      showActions={!isImportedFromIMDB}
      castId={(index + 1).toString()}
      onDelete={handleCastDelete}
      onEdit={handleCastEdit}
    />
  ));

  const handleCastSave = React.useCallback(
    (castName: string, roleName: string, castImage?: FileWithPreview) => {
      const newCastObj: ICast = {
        name: castName,
        roleName,
        id: `${castName}1`,
        castImageFile: castImage,
      };
      setCastList([...castList, newCastObj]);
      setShowCastUploadForm(false);
    },
    [castList]
  );

  const handleCastDiscard = React.useCallback(() => {
    setShowCastUploadForm(false);
  }, []);

  const handleClearAllCast = React.useCallback(() => {
    setCastList([]);
  }, []);

  const handleCastDetailsSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      onCastDetailsSubmit(castList);
    },
    [onCastDetailsSubmit, castList]
  );

  React.useEffect(() => {
    const checkFormValidity = () => {
      console.log(castList);
      if (castList.length > 0) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    checkFormValidity();
  }, [castList]);

  return (
    <>
      <Styled.CastDetailsHeader>Cast *</Styled.CastDetailsHeader>
      <Form onSubmit={handleCastDetailsSubmit}>
        <Styled.RequiredText>* indicates required</Styled.RequiredText>
        <Styled.FormFieldRow>
          <Col>
            <Styled.CastField>
              <Styled.FormSwitch
                type="switch"
                id="custom-switch"
                label="Use same as IMDB"
                onChange={handleUseImdbLinkToggle}
              />
            </Styled.CastField>
          </Col>
        </Styled.FormFieldRow>
        <Styled.FormFieldRow>
          <Col>
            <Stack direction="horizontal" gap={5} className="space-between">
              <Styled.CastFieldManualText>
                {isImportedFromIMDB
                  ? "Imported from IMDB"
                  : "or add it manually"}
              </Styled.CastFieldManualText>
              {!isImportedFromIMDB && castList.length > 0 && (
                <Styled.CastFieldClearAllText onClick={handleClearAllCast}>
                  Clear all
                </Styled.CastFieldClearAllText>
              )}
            </Stack>
            {castList && castListDetail}
          </Col>
        </Styled.FormFieldRow>
        {showCastUploadForm && (
          <Styled.FormFieldRow>
            <Col>
              <CastUploadForm
                onSave={handleCastSave}
                onDiscard={handleCastDiscard}
              />
            </Col>
          </Styled.FormFieldRow>
        )}
        {showAddIcon && (
          <Styled.FormFieldRow>
            <Col>
              <Styled.CastAddIcon
                src={PlusIcon}
                onClick={handleAddManualIconClick}
              />
            </Col>
          </Styled.FormFieldRow>
        )}

        <Styled.FormFieldRow>
          <Col>
            <BaseButton
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Go Back
            </BaseButton>
          </Col>
          <Col>
            <BaseButton
              type="submit"
              variant={isDisabled ? "secondary" : "primary"}
              disabled={isDisabled}
            >
              Continue
            </BaseButton>
          </Col>
        </Styled.FormFieldRow>
      </Form>
    </>
  );
};
