import React from "react";
import { Modal } from "react-bootstrap";

interface IModalProps {
  show?: boolean;
  onHide?: () => void;
  header?: React.ReactNode;
  body: React.ReactNode;
}

export const DefaultModalHeader: React.FC = ({ children }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
  );
};

export const ModalHeader: React.FC = ({ children }) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{children}</Modal.Title>
    </Modal.Header>
  );
};

export const FullScreenModal: React.FC<IModalProps> = ({
  show,
  onHide,
  header,
  body,
}) => {
  const onHideHandler = React.useCallback(() => {
    if (onHide) {
      onHide();
    }
  }, [onHide]);
  return (
    <Modal show={show} fullscreen={true} onHide={onHideHandler}>
      {header ? header : <DefaultModalHeader />}
      {body}
    </Modal>
  );
};
