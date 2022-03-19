import React, { useEffect, useState } from "react";
import StudentIcon from "assets/icons/student-icon.svg";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import CardIconText from "../../components/moleculars/cards/CardIconText";
import Button from "../../components/atomics/Button";
import classesApi from "../../services/api/classesApi";
import CheckIcon from "../../assets/icons/check-icon.svg";
import ModalIcon from "../../components/moleculars/modals/ModalIcon";
import classAttendanceApi from "../../services/api/classAttendanceApi";

type LocationState = {
  classId: number;
};

function RegisterClassAttendancePage(): JSX.Element {
  const [students, setStudents] = useState<any[]>([]);
  const [presentStudents, setPresentStudents] = useState(students);
  const { state } = useLocation<LocationState>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function fetchClass() {
      try {
        const { data } = await classesApi.getClass(state.classId);
        setStudents(data.students);
        setPresentStudents(data.students);
      } catch (e) {
        console.log(e);
      }
    }

    fetchClass();
  }, []);

  function handleCheckboxChange(e: any, student: any) {
    if (e.target.checked) {
      setPresentStudents((prevStudents) => [...prevStudents, student]);
    } else {
      setPresentStudents((prevStudents) =>
        prevStudents.filter((st) => st.name !== student.name),
      );
    }
  }

  const sendAttendanceRegistration = async () => {
    const studentIds = presentStudents.map((student) => student.id);
    try {
      await classAttendanceApi.postClassAttendance(state.classId, studentIds);
      setModalVisible(true);
    } catch (e) {
      console.log(e);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <S.Container>
      <ModalIcon
        onClose={closeModal}
        visible={modalVisible}
        primaryButtonText="Ok"
        primaryButtonCallback={closeModal}
        icon={CheckIcon}
        body="Aula registrada"
      />
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

      <Button text="Registrar" onClick={sendAttendanceRegistration} />
    </S.Container>
  );
}

export default RegisterClassAttendancePage;
