import React from "react";
import * as S from "./styles";

export type Props = {
  image: string;
  onClick?: () => void;
};
function CardSquareImage({ image, onClick }: Props): JSX.Element {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={image} alt="square-img" />
    </S.Container>
  );
}

export default CardSquareImage;
