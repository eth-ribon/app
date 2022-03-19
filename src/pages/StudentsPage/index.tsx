import CardIconText from "components/moleculars/cards/CardIconText";
import StudentIcon from "assets/icons/student-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";
import { useApi } from "../../hooks/useApi";
import studentsApi from "../../services/api/studentsApi";

function StudentsPage(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { data: students } = useApi<any[]>({
    key: "students",
    fetchMethod: studentsApi.getStudents,
  });

  return (
    <S.Container>
      <S.Title>ALUNOS</S.Title>
      <S.GridContainer>
        {students?.map((student) => (
          <CardIconText text={student.name} icon={StudentIcon} />
        ))}
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
