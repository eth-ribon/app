import CardIconText from "components/moleculars/cards/CardIconText";
import GlobeIcon from "assets/icons/globe-icon.svg";
import * as S from "./styles";

function HomePage(): JSX.Element {
  return (
    <S.Container>
      <S.Title>TURMAS</S.Title>
      <S.GridContainer>
        <CardIconText text="capoeira" icon={GlobeIcon} />
        <CardIconText text="capoeira" icon={GlobeIcon} />
      </S.GridContainer>
    </S.Container>
  );
}

export default HomePage;
