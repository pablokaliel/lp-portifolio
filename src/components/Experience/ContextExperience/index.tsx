import {
  Container,
  DivContext,
  Title,
  SubTitle,
  Context,
  Data,
  DivData,
} from "./styles";
interface ArticleProps {
  title: string;
  subtitle: string;
  context: string;
  data: string;
}
function ContextExperience({ title, subtitle, context, data }: ArticleProps) {
  return (
    <Container>
      <DivContext>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Context>{context}</Context>
      </DivContext>
      <DivData>
        <Data>{data}</Data>
      </DivData>
    </Container>
  );
}

export default ContextExperience;
