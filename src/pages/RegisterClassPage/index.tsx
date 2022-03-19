import React, { useEffect, useState } from "react";
import StudentIcon from "assets/icons/student-icon.svg";
import PlusIcon from "assets/icons/plus-icon.svg";
import * as S from "./styles";
import CardIconText from "../../components/moleculars/cards/CardIconText";
import Button from "../../components/atomics/Button";
import { useApi } from "../../hooks/useApi";
import studentsApi from "../../services/api/studentsApi";
import classesApi from "../../services/api/classesApi";
import CheckIcon from "../../assets/icons/check-icon.svg";
import ModalIcon from "../../components/moleculars/modals/ModalIcon";

function RegisterClassPage(): JSX.Element {
  const { data: students } = useApi<any[]>({
    key: "students",
    fetchMethod: studentsApi.getStudents,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Record<any, any>[]>([]);
  const [includedStudents, setIncludedStudents] = useState<Record<any, any>[]>(
    [],
  );
  const [className, setClassName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = students?.filter((person) =>
      person.name.toLowerCase().includes(searchTerm),
    );
    setSearchResults(results || []);
  }, [searchTerm]);

  const createClass = async () => {
    try {
      await classesApi.postClasses(
        className,
        includedStudents.map((student) => student.id),
      );
      setModalVisible(true);
      setClassName("");
      setIncludedStudents([]);
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
        body="Turma registrada"
      />
      <S.Title>Crie uma turma</S.Title>

      <S.Input
        key="name"
        name="name"
        id="name"
        type="text"
        value={className}
        placeholder="Nome da Turma"
        onChange={(e) => {
          setClassName(e.target.value);
        }}
        required
      />

      <S.Input
        type="text"
        placeholder="Incluir aluno"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length > 2 && (
        <S.SearchDiv>
          {searchResults.map((item) => (
            <CardIconText
              key={item.id}
              text={item.name}
              rightComponent={
                <S.PlusIconContainer>
                  <S.PlusIconImg
                    src={PlusIcon}
                    onClick={() => {
                      setIncludedStudents((prevState) => [...prevState, item]);
                      setSearchTerm("");
                    }}
                    alt="plus-icon"
                    onKeyDown={() => {
                      setIncludedStudents((prevState) => [...prevState, item]);
                      setSearchTerm("");
                    }}
                  />
                </S.PlusIconContainer>
              }
            />
          ))}
        </S.SearchDiv>
      )}

      <S.Text>Alunos incluídos</S.Text>
      {includedStudents.map((student) => (
        <CardIconText key={student.id} text={student.name} icon={StudentIcon} />
      ))}

      <S.ButtonContainer>
        <Button text="Criar" onClick={createClass} />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default RegisterClassPage;
