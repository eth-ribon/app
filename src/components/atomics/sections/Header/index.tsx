import Logo from "assets/icons/logo.svg";
import ArrowLeft from "assets/icons/arrow-left.svg";
import * as S from "./styles";

export type Props = {
  rightComponent?: JSX.Element;
  hasBackButton?: boolean;
  onBackButtonClick?: () => void;
};
function Header({
  rightComponent,
  hasBackButton = false,
  onBackButtonClick,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.LeftContainer>
        {hasBackButton ? (
          <img
            src={ArrowLeft}
            onClick={() => {
              if (onBackButtonClick) onBackButtonClick();
            }}
            alt="left-arrow"
            onKeyDown={() => {
              if (onBackButtonClick) onBackButtonClick();
            }}
          />
        ) : (
          <S.Logo src={Logo} alt="logo" />
        )}
      </S.LeftContainer>
      {rightComponent && <S.RightContainer>{rightComponent}</S.RightContainer>}
    </S.Container>
  );
}

export default Header;
