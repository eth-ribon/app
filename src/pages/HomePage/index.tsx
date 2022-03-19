import CardIconText from "components/moleculars/cards/CardIconText";
import GlobeIcon from "assets/icons/globe-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";

function HomePage(): JSX.Element {
  const { navigateTo } = useNavigation();

  return (
    <S.Container>
      <S.Title>TURMAS</S.Title>
      <S.BodyContainer>
        <S.GridContainer>
          <CardIconText text="capoeira" icon={GlobeIcon} />
          <CardIconText text="capoeira" icon={GlobeIcon} />
        </S.GridContainer>

        <S.ButtonContainer>
          <Button
            text="Criar Turma"
            onClick={() => {
              navigateTo("classes/register");
            }}
          />
        </S.ButtonContainer>
      </S.BodyContainer>
    </S.Container>
  );
}

export default HomePage;
