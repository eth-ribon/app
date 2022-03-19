import CardIconText from "components/moleculars/cards/CardIconText";
import StudentIcon from "assets/icons/student-icon.svg";
import * as S from "./styles";

function StudentsPage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>ALUNOS</S.Title>
      <S.GridContainer>
        <CardIconText text="Mariana Pereira" icon={StudentIcon} />
      </S.GridContainer>
    </S.Container>
  );
}

export default StudentsPage;
