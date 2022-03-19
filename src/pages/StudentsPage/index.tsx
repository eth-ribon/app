import CardIconText from "components/moleculars/cards/CardIconText";
import StudentIcon from "assets/icons/student-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";

function StudentsPage(): JSX.Element {
  const { navigateTo } = useNavigation();

  return (
    <S.Container>
      <S.Title>ALUNOS</S.Title>
      <S.GridContainer>
        <CardIconText text="Mariana Pereira" icon={StudentIcon} />
      </S.GridContainer>

      <S.ButtonContainer>
        <Button
          text="Registrar Aluno"
          onClick={() => {
            navigateTo("students/register");
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default StudentsPage;
