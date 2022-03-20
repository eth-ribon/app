import LayoutHeader from "layouts/LayoutHeader";
import * as S from "./styles";
import NavigationDonor from "../../config/routes/NavigationDonor";

export type Props = {
  children: JSX.Element;
  hasBackButton?: boolean;
};
function DonorLayout({ children, hasBackButton = false }: Props): JSX.Element {
  return (
    <>
      <NavigationDonor />
      <S.Container>
        <LayoutHeader hasBackButton={hasBackButton} />
        {children}
      </S.Container>
    </>
  );
}

export default DonorLayout;
