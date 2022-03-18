import LayoutHeader from "layouts/LayoutHeader";
import Navigation from "config/routes/Navigation";
import * as S from "./styles";

export type Props = {
  children: JSX.Element;
};
function MainLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Navigation />
      <S.Container>
        <LayoutHeader />
        {children}
      </S.Container>
    </>
  );
}

export default MainLayout;
