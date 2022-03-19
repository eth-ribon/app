import CardIconText from "components/moleculars/cards/CardIconText";
import GlobeIcon from "assets/icons/globe-icon.svg";
import * as S from "./styles";
import Button from "../../components/atomics/Button";
import useNavigation from "../../hooks/useNavigation";
import { useApi } from "../../hooks/useApi";
import classesApi from "../../services/api/classesApi";

function HomePage(): JSX.Element {
  const { navigateTo } = useNavigation();
  const { data: classes } = useApi<any[]>({
    key: "classes",
    fetchMethod: classesApi.getClasses,
  });

  return (
    <S.Container>
      <S.Title>TURMAS</S.Title>
      <S.BodyContainer>
        <S.GridContainer>
          {classes?.map((klass) => (
            <S.CardClass
              onClick={() => {
                navigateTo({pathname: "/classes/show", state: {classId: klass.id}});
              }}
            >
              <CardIconText text={klass.name} icon={GlobeIcon} />
            </S.CardClass>
          ))}
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
