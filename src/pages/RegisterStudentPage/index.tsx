import * as S from "./styles";
import GenericForm from "../../components/moleculars/forms/GenericForm";

function RegisterStudentPage(): JSX.Element {
  const handleFormSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <S.Container>
      <S.Title>Registre um aluno</S.Title>

      <GenericForm
        formFields={[
          {
            name: "name",
            type: "text",
            placeholder: "nome",
            id: "name",
            required: true,
          },
          {
            name: "familyAddress",
            type: "text",
            placeholder: "Endereço da Carteira da Família",
            id: "familyAddress",
            required: true,
          },
        ]}
        initialState={{ name: "" }}
        onFormSubmit={handleFormSubmit}
        primaryButtonText="Registrar"
      />
    </S.Container>
  );
}

export default RegisterStudentPage;
