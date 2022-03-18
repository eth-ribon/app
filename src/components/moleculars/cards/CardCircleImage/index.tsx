import React from "react";
import * as S from "./styles";

export type Props = {
  image: string;
  title?: string;
  subtitle?: string;
};
function CardCircleImage({ image, title, subtitle }: Props): JSX.Element {
  return (
    <S.Container>
      <S.Image src={image} alt="circle-img" />
      {title && <S.Title>{title}</S.Title>}
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Container>
  );
}

export default CardCircleImage;
