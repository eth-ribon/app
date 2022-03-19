import { useLocation } from "react-router-dom";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";

type LocationState = {
  classId: number;
};

function ClassShowPage(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { state } = useLocation<LocationState>();

  return (
    <S.Container>
      <h1>{state.classId}</h1>

      <S.ButtonContainer>
        <Button
          text="Registrar aula"
          onClick={() => {
            navigateTo({pathname: "register-attendance", state: { classId: state.classId }});
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ClassShowPage;
