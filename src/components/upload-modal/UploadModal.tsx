import React from "react";

import { FullScreenModal } from "../../libs";

import { UploadModalHeader } from "./upload-modal-header";
import { UploadModalBody } from "./upload-modal-body";

import * as Styled from "./UploadModal.styled";
import { CONTENT_TYPE } from "./upload-modal-body/constants";

interface IUploadModalProps {
  show?: boolean;
  onHide?: () => void;
}

export const UploadModal: React.FC<IUploadModalProps> = ({ onHide, show }) => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleStepBtnClick = React.useCallback((selectedStepNumber) => {
    setCurrentStep(selectedStepNumber);
  }, []);

  return (
    <FullScreenModal
      show={show}
      onHide={onHide}
      header={
        <UploadModalHeader
          onStepClick={handleStepBtnClick}
          currentStep={currentStep}
        />
      }
      body={<UploadModalBody contentType={CONTENT_TYPE.UPLOAD_DETAILS} />}
    ></FullScreenModal>
  );
};
