import { useEffect, useState } from "react";
import StudentIcon from "assets/icons/student-icon.svg";
import * as S from "./styles";
import CardIconText from "../../components/moleculars/cards/CardIconText";

function RegisterClassAttendancePage(): JSX.Element {
  const [students] = useState([{ name: "Theo" }, { name: "Anna" }]);
  const [presentStudents, setPresentStudents] = useState(students);

  useEffect(() => {
    console.log(presentStudents);
  }, [presentStudents]);

  function handleCheckboxChange(e: any, student: any) {
    if (e.target.checked) {
      setPresentStudents((prevStudents) => [...prevStudents, student]);
    } else {
      setPresentStudents((prevStudents) =>
        prevStudents.filter((st) => st.name !== student.name),
      );
    }
  }

  return (
    <S.Container>
      <S.Title>Registrar aula</S.Title>

      <S.Subtitle>Alunos presentes</S.Subtitle>
      {students.map((student) => (
        <CardIconText
          text={student.name}
          icon={StudentIcon}
          rightComponent={
            <S.RightContainer>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => handleCheckboxChange(e, student)}
              />
            </S.RightContainer>
          }
        />
      ))}
    </S.Container>
  );
}

export default RegisterClassAttendancePage;
