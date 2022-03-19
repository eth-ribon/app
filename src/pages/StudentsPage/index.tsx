import CardIconText from "components/moleculars/cards/CardIconText";
import StudentIcon from "assets/icons/student-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";

function StudentsPage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>ALUNOS</S.Title>
      <S.GridContainer>
        <CardIconText text="Mariana Pereira" icon={StudentIcon} />
      </S.GridContainer>

      <S.ButtonContainer>
        <Button text="Registrar Aluno" onClick={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default StudentsPage;
