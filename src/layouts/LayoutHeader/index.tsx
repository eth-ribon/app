import Header from "components/atomics/sections/Header";
import * as S from "./styles";
import useNavigation from "../../hooks/useNavigation";

export type Props = {
  hasBackButton?: boolean;
};
function LayoutHeader({ hasBackButton = false }: Props): JSX.Element {
  const { navigateBack } = useNavigation();

  return (
    <S.Container>
      <Header
        hasBackButton={hasBackButton}
        onBackButtonClick={() => {
          navigateBack();
        }}
      />
    </S.Container>
  );
}

export default LayoutHeader;
