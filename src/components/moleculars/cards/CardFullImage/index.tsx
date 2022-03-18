import React from "react";
import Divider from "components/atomics/Divider";
import theme from "styles/theme";
import Loader from "components/atomics/Loader";
import * as S from "./styles";

const { colors } = theme;
const { ribonWhite } = colors;

export type Props = {
  title?: string;
  subtitle?: string;
  roundImage?: string;
  loading?: boolean;
  backgroundImage: string;
};

function CardFullImage({
  title,
  subtitle,
  roundImage,
  loading,
  backgroundImage,
}: Props): JSX.Element {
  return (
    <S.Container backgroundImage={backgroundImage}>
      <S.ImageContainer>
        {roundImage ? <S.RoundLogo src={roundImage} alt="logo" /> : <div />}
      </S.ImageContainer>
      <S.TextContainer>
        <S.TitleContainer>
          {loading && <Loader color={ribonWhite} width={25} height={25} />}
          {title && <S.Title>{title}</S.Title>}
        </S.TitleContainer>
        <Divider color={ribonWhite} width="80px" />
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.TextContainer>
    </S.Container>
  );
}

export default CardFullImage;
