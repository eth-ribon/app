import { useLocation } from "react-router-dom";
import useBreakpoint from "hooks/useBreakpoint";
import HomeIconOn from "./assets/hatIconOn.svg";
import studentsIconOn from "./assets/studentIconOn.svg";
import studentsIconOff from "./assets/studentIconOff.svg";
import HomeIconOff from "./assets/hatIconOff.svg";
import * as S from "./styles";

export type Props = {
  isDonorPage: boolean;
};
function NavigationDonor(): JSX.Element {
  const { isDesktop } = useBreakpoint();

  const location = useLocation();
  const { search } = location;
  const isDonorPage = ["/donor"].includes(location.pathname);
  const isRedeemPage = ["/donor/redeem"].includes(location.pathname);

  const iconStudentsPage = isDonorPage ? studentsIconOn : studentsIconOff;
  const iconHomePage = isRedeemPage ? HomeIconOn : HomeIconOff;

  return isDesktop ? (
    <S.ContainerDesktop>
      <S.StyledLink to={{ pathname: "/donor", search }}>
        <S.Icon src={iconHomePage} />
        <S.Title enabled={isDonorPage}>Fundo</S.Title>
      </S.StyledLink>
      <S.StyledLink to={{ pathname: "/donor/redeem", search }}>
        <S.Icon src={iconStudentsPage} />
        <S.Title enabled={isRedeemPage}>Resgate</S.Title>
      </S.StyledLink>
    </S.ContainerDesktop>
  ) : (
    <S.ContainerMobile>
      <S.StyledLink to={{ pathname: "/donor", search }}>
        <S.Icon src={iconHomePage} />
        <S.Title enabled={isDonorPage}>Fundo</S.Title>
      </S.StyledLink>
      <S.StyledLink to={{ pathname: "/donor/redeem", search }}>
        <S.Icon src={iconStudentsPage} />
        <S.Title enabled={isRedeemPage}>Resgate</S.Title>
      </S.StyledLink>
    </S.ContainerMobile>
  );
}

export default NavigationDonor;
