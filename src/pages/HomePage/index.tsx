import CardIconText from "components/moleculars/cards/CardIconText";
import GlobeIcon from "assets/icons/globe-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";

function HomePage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>TURMAS</S.Title>
      <S.BodyContainer>
        <S.GridContainer>
          <CardIconText text="capoeira" icon={GlobeIcon} />
          <CardIconText text="capoeira" icon={GlobeIcon} />
        </S.GridContainer>

        <S.ButtonContainer>
          <Button text="Criar Turma" onClick={() => {}} />
        </S.ButtonContainer>
      </S.BodyContainer>
    </S.Container>
  );
}

export default HomePage;
