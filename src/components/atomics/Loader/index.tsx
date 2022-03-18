import LottieAnimation from "components/atomics/LottieAnimation";
import theme from "styles/theme";
import { flatten } from "lottie-colorify";
import animationData from "./assets/loader.json";
import * as S from "./styles";

const { colors } = theme;
const { ribonBlue } = colors;

export type Props = {
  color?: string;
  width?: number;
  height?: number;
};

function Loader({
  color = ribonBlue,
  width = 40,
  height = 40,
}: Props): JSX.Element {
  return (
    <S.Container>
      <LottieAnimation
        animationData={flatten(color, animationData)}
        width={width}
        height={height}
      />
    </S.Container>
  );
}

export default Loader;
