import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";

function ClassShowPage(): JSX.Element {
  const { navigateTo } = useNavigation();

  return (
    <S.Container>
      <h1>ClassShowPage</h1>

      <S.ButtonContainer>
        <Button
          text="Registrar aula"
          onClick={() => {
            navigateTo("register-attendance");
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ClassShowPage;
