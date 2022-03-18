import Button from "components/atomics/Button";
import React from "react";
import * as S from "./styles";

export type Props = {
  image: string;
  title?: string;
  buttonText: string;
  onClickButton: () => void;
};
function CardCenterImageButton({
  image,
  title,
  buttonText,
  onClickButton,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Image src={image} alt="image" />
      <S.ContainerText>
        <S.Text>{title}</S.Text>
        <Button onClick={onClickButton} text={buttonText} />
      </S.ContainerText>
    </S.Container>
  );
}

export default CardCenterImageButton;
