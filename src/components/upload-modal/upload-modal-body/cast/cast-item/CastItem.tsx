import React from "react";
import { Image, Stack } from "react-bootstrap";

import CastImage from "./../../../../../assets/images/cast.svg";
import DeleteIcon from "./../../../../../assets/images/delete.svg";
import EditIcon from "./../../../../../assets/images/edit.svg";

import * as Styled from "./CastItem.styled";

interface ICast {
  castId: string;
  castName: string;
  roleName?: string;
  castImageSrc?: string;
  showActions?: boolean;
  onDelete: (castId: string) => void;
  onEdit: (castId: string) => void;
}

export const CastItem: React.FC<ICast> = ({
  castImageSrc,
  castName,
  roleName,
  showActions = false,
  onDelete,
  onEdit,
  castId,
}) => {
  return (
    <Styled.CastItemWrapper>
      <Stack gap={2} direction="horizontal" className="space-between">
        <Stack gap={2} direction="horizontal" className="space-between">
          <Image
            src={castImageSrc ? castImageSrc : CastImage}
            roundedCircle={true}
            width={60}
            height={60}
          />
          <Styled.CastName>
            {castName} as {roleName}
          </Styled.CastName>
        </Stack>
        {showActions && (
          <Stack direction="horizontal" gap={3} className="space-between">
            <Image
              src={DeleteIcon}
              width={30}
              onClick={() => onDelete(castId)}
            />
            <Image src={EditIcon} width={30} onClick={() => onEdit(castId)} />
          </Stack>
        )}
      </Stack>
    </Styled.CastItemWrapper>
  );
};
