import { useState } from "react";
import CheckIcon from "assets/icons/check-icon.svg";
import * as S from "./styles";
import GenericForm from "../../components/moleculars/forms/GenericForm";
import studentsApi from "../../services/api/studentsApi";
import ModalIcon from "../../components/moleculars/modals/ModalIcon";

function RegisterStudentPage(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  const handleFormSubmit = async (values: any) => {
    try {
      await studentsApi.postStudents(values.name, values.familyAddress);
      setModalVisible(true);
      console.log(values);
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
        body="Aluna(o) cadastrada(o)"
      />

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
      <S.Text>
        *Certifique-se de cadastrar apenas endereços públicos de carteiras
        criadas na rede da Celo.
      </S.Text>
    </S.Container>
  );
}

export default RegisterStudentPage;
