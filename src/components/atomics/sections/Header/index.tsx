import Logo from "assets/icons/logo.svg";
import * as S from "./styles";

export type Props = {
  rightComponent?: JSX.Element;
};
function Header({ rightComponent }: Props): JSX.Element {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Logo src={Logo} alt="logo" />
      </S.LeftContainer>
      {rightComponent && <S.RightContainer>{rightComponent}</S.RightContainer>}
    </S.Container>
  );
}

export default Header;
