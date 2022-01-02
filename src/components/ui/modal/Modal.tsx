import React, { useEffect, useRef } from "react";
import axios from "axios";
import { Input } from "../input/input.container";

import * as Styled from "./Modal.styled";

interface IProps {
  show: boolean;
  closeHandler: () => void;
}

export const Modal: React.FC<IProps> = ({ show, closeHandler }) => {
  const API_URL =
    "https://oy65qolfid.execute-api.us-east-1.amazonaws.com/dev/users";
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [showThanksPopup, setShowThanksPopup] = React.useState(false);
  const [userData, setUserData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    cembooNotifications: true,
    filmFestivalNotifications: true,
  });

  const wrapperRef = useRef(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const toggleCembooNotifications = () => {
    setUserData({
      ...userData,
      cembooNotifications: !userData.cembooNotifications,
    });
  };

  const toggleFilmFestivalNotifications = () => {
    setUserData({
      ...userData,
      filmFestivalNotifications: !userData.filmFestivalNotifications,
    });
  };

  useEffect(() => {
    if (userData.firstname && userData.lastname && userData.email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userData]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscPress, false);
    return () => {
      document.removeEventListener("keydown", handleEscPress, false);
    };
  }, []);

  const closeModal = () => {
    closeHandler();
  };

  const handleEscPress = (event: any) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleBackdropClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeModal();
        }
      }
      document.addEventListener("mousedown", handleBackdropClick);
      return () => {
        document.removeEventListener("mousedown", handleBackdropClick);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);

  const submitHandler = () => {
    if (userData.firstname && userData.lastname && userData.email) {
      // Add axios logic to send data to lamda
      axios
        .post(API_URL, {
          ...userData,
        })
        .then((response) => {
          console.log(response);
          setShowThanksPopup(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Styled.ModalWrapper show={show}>
      <Styled.ModalContentWrapper ref={wrapperRef}>
        {showThanksPopup ? (
          <>
            <Styled.ModalHeader>
              <Styled.ModalH1>Thanks for Signing Up</Styled.ModalH1>
              <Styled.ModalCloseIcon
                className="fas fa-times"
                onClick={closeModal}
              />
            </Styled.ModalHeader>
            <Styled.ModalBody>
              <Styled.FormLabel>
                The updates will be sent to the provided email address.
              </Styled.FormLabel>
            </Styled.ModalBody>
          </>
        ) : (
          <>
            <Styled.ModalHeader>
              <Styled.ModalH1>Sign up for Updates</Styled.ModalH1>
              <Styled.ModalCloseIcon
                className="fas fa-times"
                onClick={closeModal}
              />
            </Styled.ModalHeader>
            <Styled.ModalBody>
              <Styled.SignupFormWrapper>
                <Styled.FormRow>
                  <Styled.FormCol>
                    <Input
                      placeholder="First Name"
                      value={userData.firstname}
                      name="firstname"
                      onDataChange={(e) => onChangeInput(e)}
                    />
                  </Styled.FormCol>
                  <Styled.FormCol>
                    <Input
                      placeholder="Last Name"
                      name="lastname"
                      value={userData.lastname}
                      onDataChange={(e) => onChangeInput(e)}
                    />
                  </Styled.FormCol>
                </Styled.FormRow>
                <Styled.FormRow>
                  <Input
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onDataChange={(e) => onChangeInput(e)}
                  />
                </Styled.FormRow>
                <Styled.FormLabel>Receive notifications about</Styled.FormLabel>
                <Styled.CheckBoxWrapper>
                  <Styled.CheckBoxItemWrapper>
                    <Styled.CheckBox
                      type="checkbox"
                      id="cembooInfo"
                      onChange={toggleCembooNotifications}
                      checked={userData.cembooNotifications}
                    />
                    <Styled.CheckBoxLabel htmlFor="cembooInfo">
                      I agree to receive the notifications about Cemboo Beta.
                    </Styled.CheckBoxLabel>
                  </Styled.CheckBoxItemWrapper>

                  <Styled.CheckBoxItemWrapper>
                    <Styled.CheckBox
                      type="checkbox"
                      id="filmFestivalInfo"
                      checked={userData.filmFestivalNotifications}
                      onChange={toggleFilmFestivalNotifications}
                    />
                    <Styled.CheckBoxLabel htmlFor="filmFestivalInfo">
                      I agree to receive the notifications about Haydenfilms
                      Festivals.
                    </Styled.CheckBoxLabel>
                  </Styled.CheckBoxItemWrapper>
                </Styled.CheckBoxWrapper>
              </Styled.SignupFormWrapper>
            </Styled.ModalBody>
            <Styled.ModalFooter>
              <Styled.SubmitButtonWrapper
                disabled={isDisabled}
                onClick={submitHandler}
              >
                Submit
              </Styled.SubmitButtonWrapper>
            </Styled.ModalFooter>
          </>
        )}
      </Styled.ModalContentWrapper>
    </Styled.ModalWrapper>
  );
};
