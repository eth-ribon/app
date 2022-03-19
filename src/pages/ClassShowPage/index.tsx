import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";
import classesApi from "../../services/api/classesApi";
import CardDoubleText from "../../components/moleculars/cards/CardDoubleText";

type LocationState = {
  classId: number;
};

function ClassShowPage(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { state } = useLocation<LocationState>();
  const [klass, setKlass] = useState<any>();

  useEffect(() => {
    async function fetchClass() {
      try {
        const { data } = await classesApi.getClass(state.classId);
        setKlass(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchClass();
  }, []);

  return (
    <S.Container>
      <S.Title>{klass?.name}</S.Title>

      {klass?.attendances.map((attendance: any) => (
        <CardDoubleText
          title={attendance.formattedDate}
          subtitle={`${attendance.presentStudents} alunos presentes`}
        />
      ))}
      <S.ButtonContainer>
        <Button
          text="Registrar aula"
          onClick={() => {
            navigateTo({
              pathname: "register-attendance",
              state: { classId: state.classId },
            });
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ClassShowPage;
