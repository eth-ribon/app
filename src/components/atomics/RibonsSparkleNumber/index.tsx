import React from "react";
import RibonIcon from "components/atomics/RibonIcon";
import theme from "styles/theme";
import * as S from "./styles";
import LeftSparkle from "./assets/reward-sparkle-left.svg";
import RightSparkle from "./assets/reward-sparkle-right.svg";

const { colors } = theme;
const { ribonBlue } = colors;

export type Props = {
  ribons: number;
  ribonColor?: string;
};
function RibonsSparkleNumber({
  ribons,
  ribonColor = ribonBlue,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Sparkle src={LeftSparkle} />
      <S.RibonsAmount>{ribons}</S.RibonsAmount>
      <RibonIcon color={ribonColor} />
      <S.Sparkle src={RightSparkle} />
    </S.Container>
  );
}

export default RibonsSparkleNumber;
