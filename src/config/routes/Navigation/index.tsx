import { useLocation } from "react-router-dom";
import useBreakpoint from "hooks/useBreakpoint";
import HomeIconOn from "./assets/hatIconOn.svg";
import studentsIconOn from "./assets/studentIconOn.svg";
import studentsIconOff from "./assets/studentIconOff.svg";
import HomeIconOff from "./assets/hatIconOff.svg";
import * as S from "./styles";

export type Props = {
  isStudentsPage: boolean;
};
function Navigation(): JSX.Element {
  const { isDesktop } = useBreakpoint();

  const location = useLocation();
  const { search } = location;
  const isStudentsPage = ["/students"].includes(location.pathname);
  const isHomePage = ["/"].includes(location.pathname);

  const iconStudentsPage = isStudentsPage ? studentsIconOn : studentsIconOff;
  const iconHomePage = isHomePage ? HomeIconOn : HomeIconOff;

  return isDesktop ? (
    <S.ContainerDesktop>
      <S.StyledLink to={{ pathname: "/", search }}>
        <S.Icon src={iconHomePage} />
        <S.Title enabled={isHomePage}>Turmas</S.Title>
      </S.StyledLink>
      <S.StyledLink to={{ pathname: "/students", search }}>
        <S.Icon src={iconStudentsPage} />
        <S.Title enabled={isStudentsPage}>Alunos</S.Title>
      </S.StyledLink>
    </S.ContainerDesktop>
  ) : (
    <S.ContainerMobile>
      <S.StyledLink to={{ pathname: "/", search }}>
        <S.Icon src={iconHomePage} />
        <S.Title enabled={isHomePage}>Turmas</S.Title>
      </S.StyledLink>
      <S.StyledLink to={{ pathname: "/students", search }}>
        <S.Icon src={iconStudentsPage} />
        <S.Title enabled={isStudentsPage}>Alunos</S.Title>
      </S.StyledLink>
    </S.ContainerMobile>
  );
}

export default Navigation;
