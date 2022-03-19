import React, { useEffect, useState } from "react";
import StudentIcon from "assets/icons/student-icon.svg";
import PlusIcon from "assets/icons/plus-icon.svg";
import * as S from "./styles";
import CardIconText from "../../components/moleculars/cards/CardIconText";
import Button from "../../components/atomics/Button";

function RegisterClassPage(): JSX.Element {
  const students = [
    { id: 1, name: "Theo" },
    { id: 2, name: "Anna" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Record<any, any>[]>([]);
  const [includedStudents, setIncludedStudents] = useState<Record<any, any>[]>(
    [],
  );
  const [className, setClassName] = useState("");

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = students.filter((person) =>
      person.name.toLowerCase().includes(searchTerm),
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <S.Container>
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
        <Button
          text="Criar"
          onClick={() => {
            console.log(
              includedStudents.map((student) => student.id),
              className,
            );
          }}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

export default RegisterClassPage;
