import LayoutHeader from "layouts/LayoutHeader";
import Navigation from "config/routes/Navigation";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
  hasBackButton?: boolean;
};
function MainLayout({ children, hasBackButton = false }: Props): JSX.Element {
  return (
    <>
      <Navigation />
      <S.Container>
        <LayoutHeader hasBackButton={hasBackButton} />
        {children}
      </S.Container>
    </>
  );
}

export default MainLayout;
